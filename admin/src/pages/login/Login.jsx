import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./auth.scss";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MapIcon from "@mui/icons-material/Map";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SecurityIcon from "@mui/icons-material/Security";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const { loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", credentials);
            if (res.data.isAdmin) {
                dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
                navigate("/");
            } else {
                dispatch({
                    type: "LOGIN_FAILURE",
                    payload: { message: "Tài khoản không có quyền truy cập quản trị." },
                });
            }
        } catch (err) {
            dispatch({
                type: "LOGIN_FAILURE",
                payload: err.response?.data || { message: "Tên đăng nhập hoặc mật khẩu không đúng." },
            });
        }
    };

    return (
        <div className="authContainer">
            {/* Header */}
            <header className="authHeader">
                <div className="headerTop">
                    <Link to="/" className="logo">
                        HTCT<span>Booking</span>
                    </Link>
                    <div className="navRight">
                        <ul>
                            <li>Trợ giúp</li>
                            <li><i className="fa-solid fa-globe"></i> Tiếng Việt</li>
                        </ul>
                    </div>
                </div>
                <div className="headerCategories">
                    <ul style={{ gap: "25px" }}>
                        <li className="active">Quản trị Hệ thống</li>
                        <li>
                            <a href="http://localhost:3000" style={{ color: "inherit", textDecoration: "none" }}>
                                Trang chủ Website
                            </a>
                        </li>
                    </ul>
                </div>
            </header>

            <div className="authWrapper">
                {/* Left Column (Auth Form) */}
                <div className="authCard">
                    <div className="authTabs">
                        <Link to="/login" className="tabLink active">Đăng nhập</Link>
                        <Link to="/register" className="tabLink">Đăng ký</Link>
                    </div>

                    <div className="authForm">
                        <h2 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "8px", color: "#1e293b", marginTop: "10px" }}>Chào mừng quay trở lại</h2>
                        <p style={{ color: "#64748b", fontSize: "15px", marginBottom: "30px", fontWeight: "500" }}>Dành cho quản trị viên hệ thống</p>

                        <form onSubmit={handleClick}>
                            <div className="formGroup">
                                <label htmlFor="username">Tên đăng nhập</label>
                                <input
                                    type="text"
                                    placeholder="Nhập tên đăng nhập của bạn"
                                    id="username"
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="formGroup">
                                <label htmlFor="password">Mật khẩu</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    id="password"
                                    onChange={handleChange}
                                    required
                                />
                                <div className="eyeIcon" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </div>
                            </div>

                            {error && <span className="authError">{error.message || "Tên đăng nhập hoặc mật khẩu không đúng."}</span>}

                            <button
                                type="submit"
                                className="authButton"
                                disabled={loading}
                            >
                                {loading ? "Đang xử lý..." : "Đăng nhập ngay"}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Column (Marketing) */}
                <div className="marketingSection">
                    <div className="promoHero">
                        <h2>Quản trị hệ thống Tour</h2>
                        <p>Kiểm soát và vận hành các lịch trình tour, đội ngũ hướng dẫn viên và khách hàng trên một nền tảng duy nhất, hiệu quả và bảo mật chuyên nghiệp.</p>
                        <SecurityIcon className="bgIcon" />
                    </div>

                    <div className="benefitsGrid">
                        <div className="benefitCard">
                            <div className="iconBox hotel">
                                <MapIcon />
                            </div>
                            <div className="benefitInfo">
                                <h4>Quản lý Lịch trình</h4>
                                <p>Cập nhật điểm đi & hành trình</p>
                            </div>
                        </div>
                        <div className="benefitCard">
                            <div className="iconBox flight">
                                <CardTravelIcon />
                            </div>
                            <div className="benefitInfo">
                                <h4>Quản lý Đặt chỗ</h4>
                                <p>Theo dõi khách hàng trực tiếp</p>
                            </div>
                        </div>
                        <div className="benefitCard">
                            <div className="iconBox promo">
                                <LocalOfferIcon />
                            </div>
                            <div className="benefitInfo">
                                <h4>Khuyến mãi & Tours</h4>
                                <p>Cấu hình giảm giá du lịch</p>
                            </div>
                        </div>
                        <div className="benefitCard">
                            <div className="iconBox secure">
                                <SecurityIcon />
                            </div>
                            <div className="benefitInfo">
                                <h4>Bảo mật tuyệt đối</h4>
                                <p>An toàn dữ liệu nền tảng 100%</p>
                            </div>
                        </div>
                    </div>

                    <div className="promoBanner">
                        <div className="bannerText">
                            <h5>Cập nhật Phiên bản 2026</h5>
                            <p>Hỗ trợ đa nền tảng và báo cáo chi tiết</p>
                        </div>
                        <div className="promoCode">V2.0</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
