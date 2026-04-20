import "./logs.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";

const Logs = () => {
    const { data, loading, error } = useFetch("/logs");

    return (
        <div className="logs">
            <Sidebar />
            <div className="logsContainer">
                <Navbar />
                <div className="content">
                    <h1>System Logs</h1>
                    {loading ? (
                        "Loading..."
                    ) : (
                        <table className="logTable">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Message</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((log) => (
                                    <tr key={log._id} className={log.type.toLowerCase()}>
                                        <td>{log.type}</td>
                                        <td>{log.message}</td>
                                        <td>{new Date(log.createdAt).toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Logs;
