import React from 'react'
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'



const Footer = () => {
    return (
        <section id="footer">
            <Link
                to="home"
                smooth="true"
                duration={500} >
                <div className="scroll-to-top"><FontAwesomeIcon icon={faAngleDoubleUp} /></div>
            </Link>
            Mirko Oricci ©2021
        </section>
    );
}

export default Footer;