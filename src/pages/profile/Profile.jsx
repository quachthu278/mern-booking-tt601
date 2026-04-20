import "./profile.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [editMode, setEditMode] = useState(false);
    const [info, setInfo] = useState({
        username: user.username,
        email: user.email,
        img: user.img,
    });

    const handleChange = (e) => {
        setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`/users/${user._id}`, info);
            setEditMode(false);
            alert("Profile updated! Please logout and login again to see changes.");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="profile">
            <Sidebar />
            <div className="profileContainer">
                <Navbar />
                <div className="content">
                    <h1>User Profile</h1>
                    <div className="profileCard">
                        <img
                            src={info.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
                            alt=""
                            className="avatar"
                        />
                        <div className="details">
                            {editMode ? (
                                <>
                                    <input
                                        type="text"
                                        id="username"
                                        value={info.username}
                                        onChange={handleChange}
                                        placeholder="Username"
                                    />
                                    <input
                                        type="email"
                                        id="email"
                                        value={info.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                    />
                                    <input
                                        type="text"
                                        id="img"
                                        value={info.img}
                                        onChange={handleChange}
                                        placeholder="Image URL"
                                    />
                                    <button className="editButton" onClick={handleUpdate}>
                                        Save
                                    </button>
                                    <button
                                        className="editButton"
                                        style={{ backgroundColor: "gray", marginLeft: "10px" }}
                                        onClick={() => setEditMode(false)}
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <h2>{info.username}</h2>
                                    <p>Email: {info.email}</p>
                                    <p>Role: {user.isAdmin ? "Admin" : "User"}</p>
                                    <p>Location: Vietnam</p>
                                    <button className="editButton" onClick={() => setEditMode(true)}>
                                        Edit Profile
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
