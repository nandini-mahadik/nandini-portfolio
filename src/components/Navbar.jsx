import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="nav-logo">N.</div>

            {/* Desktop navigation */}
            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>

            {/* Mobile menu button */}
            <button
                className="menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            {/* Mobile navigation */}
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <a href="#home" onClick={closeMenu}>
                    Home
                </a>

                <a href="#about" onClick={closeMenu}>
                    About
                </a>

                <a href="#skills" onClick={closeMenu}>
                    Skills
                </a>

                <a href="#projects" onClick={closeMenu}>
                    Projects
                </a>

                <a href="#contact" onClick={closeMenu}>
                    Contact
                </a>
            </div>
        </nav>
    );
}

export default Navbar;