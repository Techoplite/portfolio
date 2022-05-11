import React from 'react'
import eBazar from './../images/Annotation 2020-09-07 094053.png'
import axess from './../images/Annotation 2020-09-07 105526.png'
import theAssessmentSystem from './../images/Annotation 2020-09-07 105708.png'
import iFam from './../images/Screenshot 2020-11-14 172752.png'
import doesPizza from './../images/does-pizza.png'

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
                    <p className="description" id="project-description">Here are some of my projects.</p>
                </div>
                <div className="projects-list">
                    <a href="https://doe-s-pizza.vercel.app/">
                        <p>
                            <strong>Doe's Pizza (Beta version)</strong>
                        </p>
                        <img src={doesPizza} alt="Doe's Pizza" />
                    </a>
                    <a href="https://family-planner-94216.web.app/">
                        <p>
                            <strong>iFam</strong>
                        </p>
                        <img src={iFam} alt="iFam" />
                    </a>
                    <a href="https://github.com/Techoplite/eBazar">
                        <p>
                            <strong>eBazar</strong>
                        </p>
                        <img src={eBazar} alt="eBazar" />
                    </a>
                    <a href="https://github.com/Techoplite/Axess">
                        <p><strong>Axess</strong></p>
                        <img src={axess} alt="axess" />
                    </a>
                    <a href="https://github.com/Techoplite/assessment-system">
                        <p>
                            <strong>The Assessment System</strong>
                        </p>
                        <img src={theAssessmentSystem} alt="the-assessment-system" />
                    </a>
                    <h2 style={{ background: "#19192d", color: "white", padding: "2rem", marginBottom: "-50px" }}>And, of course, this portfolio website...</h2>
                </div>
            </div>
        </section>
    );
}

export default Projects;