import React from 'react'
import eBazar from './../images/Annotation 2020-09-07 094053.png'

const Projects = (props) => {
    return (
        <section id="projects" className={`about ${props.filter}`}>
            <div className="about">
                <div className="header">
                    <h1>
                        PROJECTS
                    </h1>
                </div>
                <div className="paragraph">
                    <p>Here are some of my projects.</p>
                </div>
                <div className="projects-list">
                    <img src={eBazar} alt="eBazar" />
                </div>
            </div>
        </section>
    );
}

export default Projects;