import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/authContext";
import css from "./Header.module.css";

function Header() {
  const authCtx = useContext(AuthContext);

  function logoutHandler(e) {
    authCtx.logout();
  }

  return (
    <header className={css.header}>
      <h2>EXAM</h2>
      <nav className={css.navLink}>
        {authCtx.isUserLoggedIn && <NavLink to={"/"}>Home</NavLink>}
        {!authCtx.isUserLoggedIn && <NavLink to={"/login"}>Login</NavLink>}
        <NavLink to={"/register"}>Register</NavLink>
        {authCtx.isUserLoggedIn && (
          <NavLink onClick={logoutHandler} to={"/login"}>
            Logout
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
