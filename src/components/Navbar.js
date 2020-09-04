import React, { useState } from 'react'

const Navbar = () => {
    const [navLinks, setNavLinks] = useState("hidden");
    const [hamburger, setHamburger] = useState("closed");
    const handleOnClick = () => {
        navLinks === "hidden" ? setNavLinks("visible") : setNavLinks("hidden")
        hamburger === "closed" ? setHamburger("open") : setHamburger("closed")
    }

    return (
        <div className="navbar">
            <div className="hamburger-wrapper" onClick={handleOnClick}>
                <div className="hamburger">
                    <div className={`line ${hamburger}`} id="top-line"></div>
                    <div className={`line ${hamburger}`} id="middle-line"></div>
                    <div className={`line ${hamburger}`} id="bottom-line"></div>
                </div>
            </div>
            <div className={`nav-links ${navLinks}`}>
                <div className="link">HOME</div>
                <div className="link">ABOUT</div>
                <div className="link">PORTFOLIO</div>
                <div className="link">CONTACT</div>
            </div>
        </div>
    );
}

export default Navbar;