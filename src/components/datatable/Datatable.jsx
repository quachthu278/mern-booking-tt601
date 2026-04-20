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
    if (window.confirm("Bạn có chắc muốn xóa mục này không?")) {
      try {
        await axios.delete(`/${path}/${id}`);
        setList(list.filter((item) => item._id !== id));
        alert("Xóa thành công!");
      } catch (err) {
        console.error("Delete failed:", err);
        alert("Xóa thất bại. Vui lòng kiểm tra console để biết thêm chi tiết.");
      }
    }
  };

  const handleBan = async (id) => {
    if (window.confirm("Thực hiện đổi trạng thái Khóa / Mở khóa cho tài khoản này?")) {
      try {
        const res = await axios.put(`/${path}/${id}/block`);
        setList(list.map((item) => (item._id === id ? res.data : item)));
      } catch (err) {
        console.error("Ban/Unban failed:", err);
      }
    }
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Thao tác",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction" style={{ gap: "10px", alignItems: "center" }}>
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
                className="banButton"
                onClick={() => handleBan(params.row._id)}
                style={{
                  padding: "5px 10px", 
                  borderRadius: "5px", 
                  color: params.row.isBlocked ? "green" : "red", 
                  border: `1px dotted ${params.row.isBlocked ? "green" : "red"}`, 
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: "bold"
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
        {path !== "tickets" && path !== "reviews" && (
          <Link to={`/${path}/new`} className="link">
            Thêm mới
          </Link>
        )}
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
