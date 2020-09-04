import React, { useState } from 'react';
import './sass/main.scss';
import Home from './components/Home'
import Navbar from './components/Navbar';


function App() {

  const [navLinks, setNavLinks] = useState("hidden");
  const [hamburger, setHamburger] = useState("closed");
  const handleOnClick = () => {
    navLinks === "hidden" ? setNavLinks("visible") : setNavLinks("hidden")
    hamburger === "closed" ? setHamburger("open") : setHamburger("closed")
  }

  return (
    <div className="App">
      <Navbar
        navLinks={navLinks} setNavLinks={setNavLinks}
        hamburger={hamburger} setHamburger={setHamburger}
        handleOnClick={handleOnClick}
      />
      <Home
        hamburger={hamburger}
      />
      <section id="about">About</section>
      <section>Projects</section>
    </div>
  );
}

export default App;
