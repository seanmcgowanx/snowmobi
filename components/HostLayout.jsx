import React from 'react'
import { NavLink, Outlet } from 'react-router-dom' 

export default function HostLayout() {

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }


    return (
        <>
            <nav className="host-nav">
            <NavLink 
                to="."
                end
                style={({ isActive }) => isActive ? activeStyle : null}
            >
                Dashboard
            </NavLink>
            <NavLink 
                to="income"
                style={({ isActive }) => isActive ? activeStyle : null}
            >
                Income
            </NavLink>
            <NavLink 
                to="snowmobiles"
                style={({ isActive }) => isActive ? activeStyle : null}
            >
                Snowmobiles
            </NavLink>
            <NavLink 
                to="reviews"
                style={({ isActive }) => isActive ? activeStyle : null}
            >
                Reviews
            </NavLink>
            </nav>
            <Outlet />
        </>
    )
}