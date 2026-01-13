import "./comingSoon.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

const ComingSoon = () => {
    return (
        <div className="comingSoon">
            <Sidebar />
            <div className="comingSoonContainer">
                <Navbar />
                <div className="content">
                    <h1>Coming Soon</h1>
                    <p>This feature is under development.</p>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
