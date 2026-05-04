import "../../pages/new/new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { couponInputs } from "../../formSource";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewCoupon = () => {
  const [info, setInfo] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/coupons", info);
      navigate("/coupons");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Thêm Mã giảm giá</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {couponInputs.map((input) => (
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

export default NewCoupon;
