import React from "react";
import { NavLink } from "react-router-dom"
import Empty from "../pages/Empty";
import Logo from "../assets/Logo.jpg"

function Nav() {
    return (
        <header>
            <img src={Logo} alt="logoFCT"></img>
            <nav>
                <NavLink to={/*Put uri of page you want*/Empty}>Home</NavLink>
                <NavLink to={/*Put uri of page you want*/Empty}>Cars</NavLink>
                <NavLink to={/*Put uri of page you want*/Empty}>More</NavLink>
                <NavLink to={/*Put uri of page you want*/Empty}>Help</NavLink>
                <NavLink to={/*Put uri of page you want*/Empty}>About</NavLink>
                <NavLink to={/*Put uri of page you want*/Empty}>Compare</NavLink>
            </nav>
        </header>
    );
}

export default Nav;