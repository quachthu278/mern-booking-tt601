import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import PaymentIcon from "@mui/icons-material/Payment";
import CategoryIcon from "@mui/icons-material/Category";
import ArticleIcon from "@mui/icons-material/Article";
import SettingsIcon from "@mui/icons-material/Settings";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch: authDispatch } = useContext(AuthContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logoContainer">
            <img src="/assets/logo.svg" alt="HTCT Booking" className="logoImg" />
          </div>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">CHÍNH</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Bảng điều khiển</span>
            </li>
          </Link>
          <p className="title">QUẢN LÝ TOUR DU LỊCH</p>
          <Link to="/tours" style={{ textDecoration: "none" }}>
            <li>
              <LocalActivityIcon className="icon" />
              <span>Quản lý chuyến tham quan</span>
            </li>
          </Link>
          <Link to="/flights" style={{ textDecoration: "none" }}>
            <li>
              <FlightIcon className="icon" />
              <span>Chuyến bay</span>
            </li>
          </Link>
          <Link to="/cars" style={{ textDecoration: "none" }}>
            <li>
              <DirectionsCarIcon className="icon" />
              <span>Thuê xe</span>
            </li>
          </Link>
          <Link to="/bookings" style={{ textDecoration: "none" }}>
            <li>
              <BookOnlineIcon className="icon" />
              <span>Đặt chỗ</span>
            </li>
          </Link>
          <p className="title">HÀNH CHÍNH</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Tài khoản người dùng</span>
            </li>
          </Link>
          <Link to="/stats" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Thống kê</span>
            </li>
          </Link>
          <p className="title">MỞ RỘNG</p>
          <Link to="/payments" style={{ textDecoration: "none" }}>
            <li>
              <PaymentIcon className="icon" />
              <span>Thanh toán</span>
            </li>
          </Link>
          <Link to="/categories" style={{ textDecoration: "none" }}>
            <li>
              <CategoryIcon className="icon" />
              <span>Danh mục</span>
            </li>
          </Link>
          <Link to="/reviews" style={{ textDecoration: "none" }}>
            <li>
              <StarOutlineIcon className="icon" />
              <span>Đánh giá</span>
            </li>
          </Link>
          <Link to="/tickets" style={{ textDecoration: "none" }}>
            <li>
              <SupportAgentIcon className="icon" />
              <span>Hỗ trợ (Tickets)</span>
            </li>
          </Link>
          <Link to="/articles" style={{ textDecoration: "none" }}>
            <li>
              <ArticleIcon className="icon" />
              <span>Bài viết</span>
            </li>
          </Link>
          <p className="title">HỆ THỐNG</p>
          <Link to="/settings" style={{ textDecoration: "none" }}>
            <li>
              <SettingsIcon className="icon" />
              <span>Cài đặt</span>
            </li>
          </Link>
          <p className="title">NGƯỜI DÙNG</p>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Đăng nhập</span>
            </li>
          </Link>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <li>
              <ExitToAppIcon className="icon" />
              <span>Đăng ký</span>
            </li>
          </Link>
          <li onClick={() => authDispatch({ type: "LOGOUT" })}>
            <ExitToAppIcon className="icon" />
            <span>Đăng xuất</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
