import React from 'react'

const Home = () => {
    return (
        <section>
            <div className="flex-column">
                <div className="flex-column home-text">
                    <div className="flex-row" id="greeting">
                        <code><pre>Hello World, </pre></code>
                        <code>I'm Mirko Oricci</code>
                    </div>

                    <div className="job">
                        Frontend Developer

                    </div>
                </div>
                <button>More about me</button>
            </div>
        </section>

    );
}

export default Home;