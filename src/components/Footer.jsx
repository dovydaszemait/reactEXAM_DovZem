import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../store/authContext";
import css from "./Footer.module.css";


function Footer() {
  const authCtx = useContext(AuthContext);

  function logoutHandler(e) {
    authCtx.logout();
  }

  return (
    <header className={css.header}>
      <div className={css.mainLogo}>
          
          </div>
      <nav className={css.navLink}>
        {authCtx.isUserLoggedIn && <NavLink to={"/home"}>Home</NavLink>}
        {authCtx.isUserLoggedIn && <NavLink to={"/add"}>Add</NavLink>}
        {!authCtx.isUserLoggedIn && <NavLink to={"/login"}>Login</NavLink>}
        {!authCtx.isUserLoggedIn &&<NavLink to={"/register"}>Register</NavLink>}
        {authCtx.isUserLoggedIn && (<NavLink onClick={logoutHandler} to={"/login"}>Logout</NavLink>)}
      </nav>
    </header>
  );
}

export default Footer;
