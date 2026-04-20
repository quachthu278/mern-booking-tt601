import "../../pages/new/new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewBooking = () => {
  const [info, setInfo] = useState({
    user: "",
    productType: "Hotel",
    productId: "",
    checkIn: "",
    checkOut: "",
    status: "Pending",
    totalPrice: "",
    specialRequests: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/bookings", info);
      alert("Booking created successfully!");
      navigate("/bookings");
    } catch (err) {
      console.log(err);
      alert("Failed to create booking! Check console for details.");
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Booking</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>User ID</label>
                <input id="user" type="text" onChange={handleChange} placeholder="User ID" />
              </div>
              <div className="formInput">
                <label>Product Type</label>
                <select id="productType" onChange={handleChange} value={info.productType} style={{ padding: "5px", width: "100%", borderBottom: "1px solid gray", border: "none", outline: "none" }}>
                  <option value="Hotel">Hotel</option>
                  <option value="Flight">Flight</option>
                  <option value="Car">Car Rentals</option>
                  <option value="Activity">Attractions</option>
                  <option value="Taxi">Airport Taxis</option>
                  <option value="Room">Room</option>
                </select>
              </div>
              <div className="formInput">
                <label>Product ID</label>
                <input id="productId" type="text" onChange={handleChange} placeholder="Product ID" />
              </div>
              <div className="formInput">
                <label>Check In Date</label>
                <input id="checkIn" type="date" onChange={handleChange} />
              </div>
              <div className="formInput">
                <label>Check Out Date</label>
                <input id="checkOut" type="date" onChange={handleChange} />
              </div>
              <div className="formInput">
                <label>Status</label>
                <select id="status" onChange={handleChange} value={info.status} style={{ padding: "5px", width: "100%", borderBottom: "1px solid gray", border: "none", outline: "none" }}>
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Checked-in">Checked-in</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
              <div className="formInput">
                <label>Total Price</label>
                <input id="totalPrice" type="number" onChange={handleChange} placeholder="100" />
              </div>
              <div className="formInput">
                <label>Special Requests</label>
                <input id="specialRequests" type="text" onChange={handleChange} placeholder="Notes" />
              </div>
              <button onClick={handleClick}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBooking;

