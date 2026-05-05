import "./newTour.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { tourInputs } from "../../formSource";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewTour = () => {
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      let list = [];
      if (files && files.length > 0) {
        list = await Promise.all(
          Object.values(files).map(async (file) => {
            const data = new FormData();
            data.append("file", file);
            data.append("upload_preset", "upload");
            const uploadRes = await axios.post(
              "https://api.cloudinary.com/v1_1/lamadev/image/upload",
              data
            );
            return uploadRes.data.url;
          })
        );
      }

      const newTour = {
        ...info,
        photos: list,
        highlights: info.highlights ? info.highlights.split(",").map(h => h.trim()) : [],
      };

      await axios.post("/tours", newTour);
      alert("Tạo tour thành công!");
      navigate("/tours");
    } catch (err) {
      console.log(err);
      alert("Lỗi khi tạo tour! Xem console để biết thêm chi tiết.");
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Thêm Tour du lịch</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                files
                  ? URL.createObjectURL(files[0])
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Ảnh: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {tourInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  {input.type === "textarea" ? (
                      <textarea id={input.id} onChange={handleChange} placeholder={input.placeholder} />
                  ) : (
                      <input
                        id={input.id}
                        onChange={handleChange}
                        type={input.type}
                        placeholder={input.placeholder}
                      />
                  )}
                </div>
              ))}
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value={false}>No</option>
                  <option value={true}>Yes</option>
                </select>
              </div>
              <button onClick={handleClick}>Create Tour</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTour;
