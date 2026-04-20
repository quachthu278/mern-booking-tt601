import "./categoryNav.scss";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { Link, useLocation } from "react-router-dom";

const CategoryNav = () => {
    const location = useLocation();
    const path = location.pathname;

    const categories = [
        { name: "Tour du lịch", icon: <LocalActivityIcon />, link: "/tours" },
        { name: "Chuyến bay", icon: <FlightIcon />, link: "/flights" },
        { name: "Thuê xe", icon: <DirectionsCarIcon />, link: "/cars" },
        { name: "Đặt giữ chỗ", icon: <BookOnlineIcon />, link: "/bookings" },
        { name: "Khách hàng", icon: <PersonOutlineIcon />, link: "/users" },
        { name: "Thống kê", icon: <InsertChartIcon />, link: "/stats" },
    ];

    return (
        <nav className="categoryNav">
            <ul className="categories">
                {categories.map((cat, index) => (
                    <li key={index} className={path === cat.link ? "active" : ""}>
                        <Link to={cat.link} className="catLink">
                            <span className="icon">{cat.icon}</span>
                            <span className="name">{cat.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default CategoryNav;
