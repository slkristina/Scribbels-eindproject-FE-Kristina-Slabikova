import './Navbar.css'
import {Link, useMatch, useResolvedPath } from "react-router-dom";


function Navbar() {
    return (
        <nav className={"navbar"}>
            <Link to="/" className="site-logo">
                LOGO
            </Link>
            <ul>
                <li>
                    <Link to={"/"}>Searchbar</Link>
                </li>
                <CustomLink to={"/"}>Home</CustomLink>
                <CustomLink to={"/verhaaltjes"}>Verhaaltjes</CustomLink>
                <CustomLink to={"/over-scribbels"}>Over Scribbels</CustomLink>
                <CustomLink to={"/over-de-makers"}>Over de Makers</CustomLink>
                <CustomLink to={"/winkeltje"}>Winkeltje</CustomLink>
                <CustomLink to={"/contact"}>Contact</CustomLink>
            </ul>
        </nav>
    );
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

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