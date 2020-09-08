import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-scroll'

const Home = (props) => {

    return (
        <section id="home" className={`${props.filter}`}>
            <div className="flex-column">
                <div className="flex-column home-text">
                    <div className="flex-row" id="greeting">
                        <code><pre>Hello World, </pre></code>
                        <code>I'm <span className="highlight">Mirko Oricci.</span></code>
                    </div>

                    <div className="job">
                        FRONTEND DEVELOPER

                    </div>
                </div>
                <Link
                    to="about"
                    smooth="true"
                    offset={-63}
                    duration={500}>
                    <button>More about me <i className="angle-double-down"><FontAwesomeIcon icon={faAngleDoubleDown} /></i>
                    </button>
                </Link>
            </div>
        </section>

    );
}

export default Home;