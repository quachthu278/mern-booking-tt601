import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../login/auth.scss";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import MapIcon from "@mui/icons-material/Map";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import SecurityIcon from "@mui/icons-material/Security";

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        country: "Việt Nam",
        city: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (credentials.password !== credentials.confirmPassword) {
            setError({ message: "Mật khẩu xác nhận không khớp!" });
            return;
        }

        if (credentials.password.length < 6) {
            setError({ message: "Mật khẩu phải có ít nhất 6 ký tự!" });
            return;
        }

        setLoading(true);
        try {
            const { confirmPassword, ...dataToSend } = credentials;
            await axios.post("/auth/register", { ...dataToSend, isAdmin: true });
            setSuccess(true);
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (err) {
            setError(err.response?.data?.message || "Đã xảy ra lỗi, vui lòng thử lại!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="authContainer">
            {/* Header */}
            <header className="authHeader">
                <div className="headerTop">
                    <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/assets/logo.svg" alt="HTCT Booking" style={{ height: "42px", objectFit: "contain" }} />
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
                        <li style={{ cursor: 'pointer' }}>
                            <a href="http://localhost:3000" target="_blank" rel="noreferrer" style={{ color: "inherit", textDecoration: "none", display: "block", width: "100%", height: "100%" }}>
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
                        <Link to="/login" className="tabLink">Đăng nhập</Link>
                        <Link to="/register" className="tabLink active">Đăng ký</Link>
                    </div>

                    <div className="authForm" style={{ padding: "30px 40px" }}>
                        {success ? (
                            <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                <div style={{ fontSize: '50px', color: '#10b981', marginBottom: '20px' }}>✅</div>
                                <h3 style={{ marginBottom: '10px', fontSize: '24px', fontWeight: '800' }}>Đăng ký thành công!</h3>
                                <p style={{ color: '#64748b' }}>Đang chuyển hướng đến trang đăng nhập...</p>
                            </div>
                        ) : (
                            <>
                                <h2 style={{ fontSize: "28px", fontWeight: "800", marginBottom: "8px", color: "#1e293b", marginTop: "10px" }}>Tạo tài khoản mới</h2>
                                <p style={{ color: "#64748b", fontSize: "15px", marginBottom: "25px", fontWeight: "500" }}>Tham gia đội ngũ quản lý booking</p>

                                <form onSubmit={handleSubmit}>
                                    <div className="formRow">
                                        <div className="formGroup">
                                            <label htmlFor="username">Tên đăng nhập</label>
                                            <input
                                                type="text"
                                                placeholder="VD: admin_01"
                                                id="username"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="formGroup">
                                            <label htmlFor="email">Email</label>
                                            <input
                                                type="email"
                                                placeholder="admin@booking.com"
                                                id="email"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="formRow">
                                        <div className="formGroup">
                                            <label htmlFor="city">Thành phố</label>
                                            <input
                                                type="text"
                                                placeholder="VD: Hà Nội"
                                                id="city"
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="formGroup">
                                            <label htmlFor="country">Quốc gia</label>
                                            <input
                                                type="text"
                                                id="country"
                                                value={credentials.country}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="formGroup">
                                        <label htmlFor="phone">Số điện thoại</label>
                                        <input
                                            type="tel"
                                            placeholder="0901234567"
                                            id="phone"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="formRow">
                                        <div className="formGroup">
                                            <label htmlFor="password">Mật khẩu</label>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                placeholder="Tối thiểu 6 ký tự"
                                                id="password"
                                                onChange={handleChange}
                                                required
                                            />
                                            <div className="eyeIcon" onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? <VisibilityOff style={{ fontSize: 18 }} /> : <Visibility style={{ fontSize: 18 }} />}
                                            </div>
                                        </div>
                                        <div className="formGroup">
                                            <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                placeholder="Xác nhận lại mật khẩu"
                                                id="confirmPassword"
                                                onChange={handleChange}
                                                required
                                            />
                                            <div className="eyeIcon" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                                {showConfirmPassword ? <VisibilityOff style={{ fontSize: 18 }} /> : <Visibility style={{ fontSize: 18 }} />}
                                            </div>
                                        </div>
                                    </div>

                                    {error && <span className="authError">{error.message || error}</span>}

                                    <button
                                        type="submit"
                                        className="authButton"
                                        disabled={loading}
                                        style={{ marginTop: "15px" }}
                                    >
                                        {loading ? "Đang xử lý..." : "Đăng ký thành viên"}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                </div>

                {/* Right Column (Marketing) */}
                <div className="marketingSection">
                    <div className="promoHero">
                        <h2>Gia nhập Hệ thống Quản trị</h2>
                        <p>Dễ dàng đăng ký và bắt đầu điều phối các lịch trình, khách hàng và doanh thu du lịch trực tuyến thông minh.</p>
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

export default Register;
