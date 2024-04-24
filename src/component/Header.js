import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const token = localStorage.getItem("token");
  const cartitems = useSelector((state) => state.addtocart.cart);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="nav-container">
      {!token ? (
        <>
          <Link to="/login">
            <span className="nav-login">Login</span>
          </Link>
          <Link to="/signup">
            <span className="nav-login">SignUp</span>
          </Link>
        </>
      ) : (
        <Link to="/">
          <span
            className="nav-login"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </span>
          <Link to="/addtocart">
            <span className="nav-login">
              Cart<sup>{cartitems.length}</sup>
            </span>
          </Link>
        </Link>
      )}
    </div>
  );
};
export default Header;
