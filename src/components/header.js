import '../styles/index.css';
import { useState } from "react";
import {Link } from "react-router-dom";

const Header = () => {
    const [menuState, setMenuState] = useState(false);
    const toggleMenu = () => {
        setMenuState(!menuState);
    }
    return (
        <>
            <nav>
            <div id="toggle" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
                <div id="nav-bar" className={menuState ? "flex" : "hidden"}>
                    <Link id="link-home" class="nav-item" to="/">Board at Home</Link>
                    <Link id="link-games" class="nav-item" to="/games">Games</Link>
                    <Link id="link-discover" class="nav-item" to="/game-item">Discover a new game</Link>
                    <Link id="link-forums" class="nav-item" to="/forums">Forums</Link>
                    <Link id="link-contact-me" class="nav-item" to="/contact">Contact Me</Link>
                </div>
            </nav>
        </>
    )
}

export default Header;