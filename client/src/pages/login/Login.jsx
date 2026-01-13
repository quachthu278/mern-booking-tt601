import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

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
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <h2 className="lTitle">Sign in or create an account</h2>
        <div className="lInputContainer">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            id="username"
            onChange={handleChange}
            className="lInput"
          />
        </div>
        <div className="lInputContainer">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            id="password"
            onChange={handleChange}
            className="lInput"
          />
        </div>
        <button disabled={loading} onClick={handleClick} className="lButton">
          Sign In
        </button>
        {error && <span className="lError">{error.message}</span>}
        <div className="lRegisterLink">
          Don't have an account? <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
