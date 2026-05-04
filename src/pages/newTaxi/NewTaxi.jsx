import "../../pages/new/new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { taxiInputs } from "../../formSource";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewTaxi = () => {
  const [info, setInfo] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/taxis", info);
      alert("Tạo airport taxi thành công!");
      navigate("/taxis");
    } catch (err) {
      console.log(err);
      alert("Lỗi khi tạo airport taxi! Xem console để biết thêm chi tiết.");
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New Airport Taxi</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {taxiInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
              <button onClick={handleClick}>Lưu</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTaxi;
