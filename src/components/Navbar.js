import React, { useState } from 'react'

const Navbar = () => {
    const [navLinks, setNavLinks] = useState("hidden");
    const handleOnClick = () => {

        navLinks === "hidden" ? setNavLinks("visible") : setNavLinks("hidden")
    }

    return (
        <div className="navbar">
            <div className="hamburger-wrapper" onClick={handleOnClick}>
                <div className="hamburger">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
            <div className={`nav-links ${navLinks}`}>
                <div className="link">Home</div>
                <div className="link">About</div>
                <div className="link">Portfolio</div>
                <div className="link">Contact</div>
            </div>
        </div>
    );
}

export default Navbar;