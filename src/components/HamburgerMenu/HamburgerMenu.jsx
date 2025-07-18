import { useState } from "react";
import {Link, useMatch, useResolvedPath } from "react-router-dom";
import "./HamburgerMenu.css";


function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((open) => !open);
    };

    return (
        <div className="hamburger-menu">
            <button className="burger-btn" onClick={toggleMenu}>
                ☰
            </button>

            {isOpen && (
                <ul className="hamburger-menu-list">
                    <li><Link to={"/"} onClick={() => setIsOpen(false)}>Home</Link></li>
                    <li><Link to={"/verhaaltjes"} onClick={() => setIsOpen(false)}>Verhaaltjes</Link></li>
                    <li><Link to={"/over-scribbels"} onClick={() => setIsOpen(false)}>Over Scribbels</Link></li>
                    <li><Link to={"/over-de-makers"} onClick={() => setIsOpen(false)}>Over de Makers</Link></li>
                    <li><Link to={"/winkeltje"} onClick={() => setIsOpen(false)}>Winkeltje</Link></li>
                    <li><Link to={"/contact"} onClick={() => setIsOpen(false)}>Contact</Link></li>
                </ul>
            )}
        </div>
    );
}


export default HamburgerMenu;