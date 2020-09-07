import React from 'react'
import eBazar from './../images/Annotation 2020-09-07 094053.png'
import axess from './../images/Annotation 2020-09-07 105526.png'
import theAssessmentSystem from './../images/Annotation 2020-09-07 105708.png'

const Projects = (props) => {
    return (
        <section id="projects" className={`${props.filter}`}>
            <div className="section-wrapper">
                <div className="header">
                    <h1>
                        PROJECTS
                    </h1>
                </div>
                <div className="paragraph">
                    <p id="description">Here are some of my projects.</p>
                </div>
                <div className="projects-list">
                    <p><strong>eBazar</strong></p>
                    <img src={eBazar} alt="eBazar" />
                    <p><strong>Axess</strong></p>
                    <img src={axess} alt="axess" />
                    <p><strong>The Assessment System</strong></p>
                    <img src={theAssessmentSystem} alt="the-assessment-system" />
                </div>
            </div>
        </section>
    );
}

export default Projects;