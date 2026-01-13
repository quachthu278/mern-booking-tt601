import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">MernBooking</span>
        </Link>
        {user ? (
          <div className="username">
            <img src={user.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="" className="avatar" />
            <span>{user.username}</span>
            <Link to="/assistant"><button className="navButton">AI Assistant</button></Link>
            <button className="navButton" onClick={() => { /* Logout logic here later */ }}>Logout</button>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/assistant"><button className="navButton">AI Assistant</button></Link>
            <Link to="/register"><button className="navButton">Register</button></Link>
            <Link to="/login"><button className="navButton">Login</button></Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
