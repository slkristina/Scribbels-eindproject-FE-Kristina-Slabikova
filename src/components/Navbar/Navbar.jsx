import './Navbar.css'
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu.jsx";
import React from "react";

function Navbar() {

    return (
        <nav className={"navbar"}>
            <Link to="/" className="site-logo">
                <img src={'/assets/Logo-menu.png'} alt="Scribbels Logo"/>
            </Link>

            <ul className={"navbar-links"}>
                <CustomLink to={"/"}>Home</CustomLink>
                <CustomLink to={"/verhaaltjes"}>Verhaaltjes</CustomLink>
                <CustomLink to={"/over-scribbels"}>Over Scribbels</CustomLink>
                <CustomLink to={"/over-de-makers"}>Over de Makers</CustomLink>
                <CustomLink to={"/winkeltje"}>Winkeltje</CustomLink>
                <CustomLink to={"/contact"}>Contact</CustomLink>
                <div className="nav-account-buttons">
                <CustomLink to={"/login"}>Inloggen</CustomLink>
                <CustomLink to={"/register"}>Registreren</CustomLink>
                </div>
            </ul>

            <div className="hamburger-btn-container">
                <HamburgerMenu/>
            </div>
        </nav>
    );
}


function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li>
            <Link
                to={to}
                className={isActive ? "active" : ""}
                {...props}
            >
                {children}
            </Link>
        </li>
    )
}

export default Navbar;