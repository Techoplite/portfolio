import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
    return (
        <section>
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
                <button>More about me <i className="angle-double-down"><FontAwesomeIcon icon={faAngleDoubleDown} /></i></button>
            </div>
        </section>

    );
}

export default Home;