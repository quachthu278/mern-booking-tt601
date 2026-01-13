import "./settings.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";
import axios from "axios";

const Settings = () => {
    const { data, loading, error } = useFetch("/settings");
    const [info, setInfo] = useState({});

    useEffect(() => {
        if (data) {
            setInfo(data);
        }
    }, [data]);

    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setInfo((prev) => ({ ...prev, [e.target.id]: value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.put("/settings", info);
            alert("Settings updated!");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="settings">
            <Sidebar />
            <div className="settingsContainer">
                <Navbar />
                <div className="content">
                    <h1>Settings</h1>
                    {loading ? (
                        "Loading..."
                    ) : (
                        <form>
                            <div className="formGroup">
                                <label>Site Name</label>
                                <input
                                    type="text"
                                    id="siteName"
                                    value={info.siteName || ""}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formGroup">
                                <label>Admin Email</label>
                                <input
                                    type="email"
                                    id="adminEmail"
                                    value={info.adminEmail || ""}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formGroup">
                                <label>Maintenance Mode</label>
                                <input
                                    type="checkbox"
                                    id="maintenanceMode"
                                    checked={info.maintenanceMode || false}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="button" className="saveButton" onClick={handleClick}>
                                Save Changes
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Settings;
