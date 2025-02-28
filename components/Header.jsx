import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {

    const activeStyle = {
        fontWeight: "bold", 
        textDecoration: "underline",
        color: "#161616"
    }

    return (
        <header>
            <Link to="/" className="site-logo">SNOWMOBI</Link>
            <nav>
            <NavLink 
                to="/host"
                className={({ isActive }) => isActive ? "active-link" : null}
            >
                Host
            </NavLink>
            <NavLink 
                to="/about"
                className={({ isActive }) => isActive ? "active-link" : null}
            >
                About
            </NavLink>
            <NavLink 
                to="/snowmobiles"
                className={({ isActive }) => isActive ? "active-link" : null}
            >
                Snowmobiles
            </NavLink>
            <Link to="login" className="login-link">
                <img 
                    src="../assets/images/avatar-icon.png" 
                    width="20px"
                    className="login-icon"
                />
            </Link>
            </nav>
        </header>
    )
}