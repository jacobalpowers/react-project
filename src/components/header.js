import '../styles/index.css';
import {Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav>
                <div id="nav-bar">
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