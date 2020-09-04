import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

const Home = (props) => {

    const [homeFilter, setHomeFilter] = useState("no-filter")

    useEffect(() => {
        props.hamburger === "open" ? setHomeFilter("blurred") : setHomeFilter("no-filter")
    }, [setHomeFilter, props.hamburger]);





    return (
        <section id="home" className={`${homeFilter}`}>
            <div className="flex-column">
                <div className="flex-column home-text">
                    <div className="flex-row" id="greeting">
                        <code><pre>Hello World, </pre></code>
                        <code>I'm <span className="highlight">Mirko Oricci.</span></code>
                    </div>

                    <div className="job">
                        Frontend Developer

                    </div>
                </div>
                <Link to="about" smooth="true" duration={500}>
                    <button>More about me <i className="angle-double-down"><FontAwesomeIcon icon={faAngleDoubleDown} /></i>
                    </button>
                </Link>
            </div>
        </section>

    );
}

export default Home;