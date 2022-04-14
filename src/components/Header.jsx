import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './Header.module.css';

function Header() {
  return (
<header className={css.header}>
    <h2>EXAM</h2>
    <nav className={css.navLink}>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/login'}>Login</NavLink>
        <NavLink to={'/register'}>Register</NavLink>
    </nav>
</header>
    )
}

export default Header