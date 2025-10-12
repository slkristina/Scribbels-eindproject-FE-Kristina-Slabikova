import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./HamburgerMenu.css";
import {handleLogout, useAuthValue} from "../../context/AuthContext.jsx";


function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const { currentUser } = useAuthValue();

    const toggleMenu = () => {
        setIsOpen((open) => !open);
    };

    return (
        <nav className="hamburger-menu">
            <button className="burger-btn" type="button" onClick={toggleMenu}>
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
                    {!currentUser ?
                        <>
                            <li><Link to={"/login"} onClick={() => setIsOpen(false)}>Inloggen</Link></li>
                            <li><Link to={"/register"} onClick={() => setIsOpen(false)}>Registreren</Link></li>
                        </>
                        :
                        <li><Link to={"/"} onClick={() => handleLogout}>Uitloggen</Link></li>

                    }
                </ul>
            )}
        </nav>
    );
}


export default HamburgerMenu;