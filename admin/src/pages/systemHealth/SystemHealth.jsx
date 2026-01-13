import "./systemHealth.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useFetch from "../../hooks/useFetch";

const SystemHealth = () => {
    const { data, loading, error } = useFetch("/health");

    return (
        <div className="systemHealth">
            <Sidebar />
            <div className="systemHealthContainer">
                <Navbar />
                <div className="content">
                    <h1>System Health</h1>
                    {loading ? (
                        "Loading..."
                    ) : (
                        <div className="stats">
                            <div className="statItem">
                                <h2>CPU Usage</h2>
                                <div className="chart">
                                    <CircularProgressbar value={data?.cpu || 0} text={`${data?.cpu || 0}%`} strokeWidth={5} />
                                </div>
                            </div>
                            <div className="statItem">
                                <h2>Memory Usage</h2>
                                <div className="chart">
                                    <CircularProgressbar
                                        value={data?.memory || 0}
                                        text={`${data?.memory || 0}%`}
                                        strokeWidth={5}
                                        styles={{ path: { stroke: "orange" } }}
                                    />
                                </div>
                            </div>
                            <div className="statItem">
                                <h2>Disk Usage</h2>
                                <div className="chart">
                                    <CircularProgressbar
                                        value={data?.disk || 0}
                                        text={`${data?.disk || 0}%`}
                                        strokeWidth={5}
                                        styles={{ path: { stroke: "green" } }}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SystemHealth;
