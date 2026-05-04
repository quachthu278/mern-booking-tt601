import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

const Datatable = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState([]);
  const { data, loading, error } = useFetch(`/${path}`);

  useEffect(() => {
    if (Array.isArray(data)) {
      setList(data);
    } else if (data) {
        // If data is an object but contains the requested list (common in some APIs)
        if (Array.isArray(data[path])) {
            setList(data[path]);
        }
    }
  }, [data, path]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await axios.delete(`/${path}/${id}`);
        setList(list.filter((item) => item._id !== id));
        alert("Item deleted successfully!");
      } catch (err) {
        console.error("Delete failed:", err);
        alert("Failed to delete item. Check console for details.");
      }
    }
  };

  const handleBlock = async (id) => {
    try {
      await axios.put(`/users/${id}/block`);
      setList(list.map((item) => {
        if (item._id === id) {
          return { ...item, isBlocked: !item.isBlocked };
        }
        return item;
      }));
      // alert("User status updated successfully!");
    } catch (err) {
      console.error("Block failed:", err);
      alert("Failed to update user status.");
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/${path}/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">Xem</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Xóa
            </div>
            {path === "users" && (
                <div
                    className="blockButton"
                    onClick={() => handleBlock(params.row._id)}
                    style={{
                        padding: "2px 5px",
                        borderRadius: "5px",
                        color: params.row.isBlocked ? "green" : "crimson",
                        border: params.row.isBlocked ? "1px dotted green" : "1px dotted crimson",
                        cursor: "pointer",
                    }}
                >
                    {params.row.isBlocked ? "Mở khóa" : "Khóa"}
                </div>
            )}
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        <span style={{textTransform: "capitalize"}}>{path}</span>
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={Array.isArray(list) ? list : []}
        columns={(columns || []).concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id || Math.random()}
      />
    </div>
  );
};

export default Datatable;
