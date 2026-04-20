import "./newDelivery.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewDelivery = () => {
    const [info, setInfo] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        if (!info.product || !info.customer) {
            alert("Please fill in all required fields (Product and Customer).");
            return;
        }
        try {
            await axios.post("/delivery", info);
            alert("Delivery added successfully!");
            navigate("/delivery");
        } catch (err) {
            console.log(err);
            alert("Error adding delivery. Please check console for details.");
        }
    };

    return (
        <div className="new">
            <Sidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Add New Delivery</h1>
                </div>
                <div className="bottom">
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label>Product Name</label>
                                <input
                                    type="text"
                                    placeholder="Acer Nitro 5"
                                    id="product"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formInput">
                                <label>Customer Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    id="customer"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formInput">
                                <label>Status</label>
                                <select id="status" onChange={handleChange}>
                                    <option value="Pending">Pending</option>
                                    <option value="Delivered">Delivered</option>
                                    <option value="Cancelled">Cancelled</option>
                                </select>
                            </div>
                            <button onClick={handleClick}>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewDelivery;
