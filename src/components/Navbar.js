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
                    <div className="link" onClick={handleOnClick}><button className="link-text">HOME</button></div>
                </Link>
                <Link
                    to="about"
                    smooth="true"
                    offset={-63}
                    duration={500}>
                    <div className="link" onClick={handleOnClick}><button className="link-text">ABOUT</button></div>
                </Link>
                <Link
                    to="projects"
                    smooth="true"
                    offset={-63}
                    duration={500}>
                    <div className="link" onClick={handleOnClick}><button className="link-text">PROJECTS</button></div>
                </Link>
                <Link
                    to="contacts"
                    smooth="true"
                    offset={-63}
                    duration={500}>
                    <div className="link" onClick={handleOnClick}><button className="link-text">CONTACTS</button></div>
                </Link >
            </div >
        </div >
    );
}

export default Navbar;