import React from 'react'
import ProgrammingIcons from './icons/ProgrammingIcons';

const About = (props) => {
    return (
        <section id="about" className={`${props.filter}`}>
            <div className="section-wrapper">
                <div className="header">
                    <h1>
                        ABOUT
                    </h1>
                </div>
                <div className="paragraph">
                    <p>I am a <strong>Computing and IT graduated</strong> with a passion for programming.</p>
                    <p>This is my tech stack</p>
                </div>
                <div className="icons-list">
                    <ProgrammingIcons />
                </div>
            </div>
        </section>
    );
}

export default About;