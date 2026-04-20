import "./notifications.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";

const Notifications = () => {
    const { data, loading, error } = useFetch("/notifications");

    return (
        <div className="notifications">
            <Sidebar />
            <div className="notificationsContainer">
                <Navbar />
                <div className="content">
                    <h1>Notifications</h1>
                    {loading ? (
                        "Loading..."
                    ) : (
                        <div className="list">
                            {data && data.map((note) => (
                                <div key={note._id} className="item">
                                    <span className="message">{note.message}</span>
                                    <span className="time">{note.time}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Notifications;
