import "./stats.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import useFetch from "../../hooks/useFetch";
import Widget from "../../components/widget/Widget";

const Stats = () => {
    const { data, loading, error } = useFetch("/stats");

    return (
        <div className="stats">
            <Sidebar />
            <div className="statsContainer">
                <Navbar />
                <div className="widgets" style={{ display: "flex", padding: "20px", gap: "20px" }}>
                    <Widget type="user" amount={data?.users} />
                    <Widget type="order" amount={data?.deliveries} />
                    <Widget type="earning" amount={data?.hotels} />
                    <Widget type="balance" amount={data?.rooms} />
                </div>
                <div className="charts">
                    <Featured />
                    <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
                </div>
                <div className="charts">
                    <Chart title="User Analytics" aspect={2 / 1} />
                </div>
            </div>
        </div>
    );
};

export default Stats;
