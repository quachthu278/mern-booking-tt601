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
import RateReviewIcon from "@mui/icons-material/RateReview";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import HotelIcon from "@mui/icons-material/Hotel";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import FlightIcon from "@mui/icons-material/Flight";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import ExploreIcon from "@mui/icons-material/Explore";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const { dispatch: authDispatch } = useContext(AuthContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logoContainer">
            <img src="/assets/logo.png" alt="HTCT Booking" className="logoImg" />
            <span className="logo">HTCT Booking</span>
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
          <Link to="/bookings" style={{ textDecoration: "none" }}>
            <li>
              <BookOnlineIcon className="icon" />
              <span>Đặt chỗ</span>
            </li>
          </Link>
          <p className="title">DỊCH VỤ LƯU TRÚ & VẬN CHUYỂN</p>
          <Link to="/hotels" style={{ textDecoration: "none" }}>
            <li>
              <HotelIcon className="icon" />
              <span>Khách sạn</span>
            </li>
          </Link>
          <Link to="/rooms" style={{ textDecoration: "none" }}>
            <li>
              <MeetingRoomIcon className="icon" />
              <span>Phòng nghỉ</span>
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
              <span>Thuê xe tự lái</span>
            </li>
          </Link>
          <Link to="/taxis" style={{ textDecoration: "none" }}>
            <li>
              <LocalTaxiIcon className="icon" />
              <span>Taxi / Đưa đón</span>
            </li>
          </Link>
          <p className="title">TRẢI NGHIỆM & KHUYẾN MÃI</p>
          <Link to="/activities" style={{ textDecoration: "none" }}>
            <li>
              <ExploreIcon className="icon" />
              <span>Hoạt động giải trí</span>
            </li>
          </Link>
          <Link to="/coupons" style={{ textDecoration: "none" }}>
            <li>
              <CardGiftcardIcon className="icon" />
              <span>Mã giảm giá</span>
            </li>
          </Link>
          <Link to="/delivery" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Dịch vụ giao hàng</span>
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
          <Link to="/articles" style={{ textDecoration: "none" }}>
            <li>
              <ArticleIcon className="icon" />
              <span>Bài viết</span>
            </li>
          </Link>
          <Link to="/reviews" style={{ textDecoration: "none" }}>
            <li>
              <RateReviewIcon className="icon" />
              <span>Đánh giá</span>
            </li>
          </Link>
          <Link to="/tickets" style={{ textDecoration: "none" }}>
            <li>
              <SupportAgentIcon className="icon" />
              <span>Hỗ trợ</span>
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
