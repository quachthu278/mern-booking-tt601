import "./singleBooking.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import axios from "axios";

const SingleBooking = () => {
  const location = useLocation();
  const bookingId = location.pathname.split("/")[2];
  const { data, loading, error, reFetch } = useFetch(`/bookings/find/${bookingId}`);
  
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (data && data.status) {
      setStatus(data.status);
    }
  }, [data]);

  const handleUpdate = async () => {
    try {
      await axios.put(`/bookings/${bookingId}/status`, { status });
      alert("Booking status updated successfully!");
      reFetch();
    } catch (err) {
      console.error(err);
      alert("Error updating booking status");
    }
  };

  return (
    <div className="singleBooking">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        {loading ? (
          "Loading..."
        ) : (
          <div className="top">
            <div className="left">
              <div className="editButton" onClick={() => navigate(-1)}>Back</div>
              <h1 className="title">Booking Information</h1>
              <div className="item">
                <div className="details">
                  <h1 className="itemTitle">ID: {data._id}</h1>
                  <div className="detailItem">
                    <span className="itemKey">User ID:</span>
                    <span className="itemValue">{data.user}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Product Type:</span>
                    <span className="itemValue">{data.productType}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Product ID:</span>
                    <span className="itemValue">{data.productId}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Check In:</span>
                    <span className="itemValue">{data.checkIn ? new Date(data.checkIn).toLocaleDateString("vi-VN") : "N/A"}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Check Out:</span>
                    <span className="itemValue">{data.checkOut ? new Date(data.checkOut).toLocaleDateString("vi-VN") : "N/A"}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Total Price:</span>
                    <span className="itemValue">${data.totalPrice}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Special Requests:</span>
                    <span className="itemValue">{data.specialRequests || "None"}</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Current Status:</span>
                    <span className={`itemValue status ${data.status}`}>{data.status}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <h1 className="title">Update Status</h1>
              <div className="updateWrapper">
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Checked-in">Checked-in</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
                <button onClick={handleUpdate}>Update</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleBooking;
