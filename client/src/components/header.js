import { useContext } from "react";
import { UserContext } from "../App";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
function Header() {
  const { user,logout,login } = useContext(UserContext);
  const location = useLocation(null);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <i className="fa-solid fa-images-user"></i>
        </div>
        <div className="nav-wrapper">
          <ul className="nav">
            <li
              className={`nav-item ${location.pathname == "/" ? "active" : ""}`}
            >
              <Link to="/">Home</Link>
            </li>
            <li className={`nav-item ${location.pathname == "/profile" ? "active" : ""}`}>
              <Link to="/profile">Profile</Link>
            </li>
            {user ? (
              <li className={`nav-item`} onClick={logout}><a>Logout</a></li>) : (
              <li className={`nav-item ${location.pathname == "/login" ? "active" : ""}`} >
                <Link to="/login">Login/signup</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
