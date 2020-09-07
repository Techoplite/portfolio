import React from 'react'

const Contacts = (props) => {
    return (
        <section id="contacts" className={`${props.filter}`}>
            <div className="section-wrapper">
                <div className="header">
                    <h1>
                        CONTACTS
                    </h1>
                </div>
                <p className="description">You can easily contact me via...</p>
                <div className="means-of-contact">
                    <div className="paragraph">
                        <h2>Mobile Phone</h2>
                        <p>07490680828</p>
                    </div>
                    <div className="paragraph">
                        <h2>Email</h2>
                        <p>oriccimirko@gmail.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contacts;