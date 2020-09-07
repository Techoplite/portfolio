import React from 'react'
import { Link } from 'react-scroll'

const Navbar = (props) => {

    const handleOnClick = () => {
        return props.hamburger === "open" ? (props.setNavLinks("hidden"), props.setHamburger("closed")) : (props.setNavLinks("visible"), props.setHamburger("open"))
    }

    return (
        <div className="navbar">
            <div className="hamburger-wrapper" onClick={props.handleOnClick}>
                <div className="hamburger">
                    <div className={`line ${props.hamburger}`} id="top-line"></div>
                    <div className={`line ${props.hamburger}`} id="middle-line"></div>
                    <div className={`line ${props.hamburger}`} id="bottom-line"></div>
                </div>
            </div>
            <div className={`nav-links ${props.navLinks}`}>
                <Link
                    to="home"
                    smooth="true"
                    duration={500} >
                    <div className="link" onClick={handleOnClick}>HOME</div>
                </Link>
                <Link
                    to="about"
                    smooth="true"
                    duration={500}>
                    <div className="link" onClick={handleOnClick}>ABOUT</div>
                </Link>
                <Link
                    to="projects"
                    smooth="true"
                    duration={500}>
                    <div className="link" onClick={handleOnClick}>PROJECTS</div>
                </Link>
                <Link
                    to="contact"
                    smooth="true"
                    duration={500}>
                    <div className="link">CONTACT</div>
                </Link >
            </div >
        </div >
    );
}

export default Navbar;