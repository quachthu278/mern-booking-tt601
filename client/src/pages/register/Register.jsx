import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./register.css";

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post("/auth/register", credentials);
            navigate("/login");
        } catch (err) {
            setError(err.response.data);
        }
        setLoading(false);
    };

    return (
        <div className="register">
            <div className="rContainer">
                <h2 className="rTitle">Create an account</h2>
                <div className="rInputContainer">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        id="username"
                        onChange={handleChange}
                        className="rInput"
                    />
                </div>
                <div className="rInputContainer">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        id="email"
                        onChange={handleChange}
                        className="rInput"
                    />
                </div>
                <div className="rInputContainer">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        id="password"
                        onChange={handleChange}
                        className="rInput"
                    />
                </div>
                <button disabled={loading} onClick={handleClick} className="rButton">
                    Register
                </button>
                {error && <span className="rError">{error.message}</span>}
                <div className="rLoginLink">
                    Already have an account? <Link to="/login">Sign in</Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
