import React, { useState, useEffect } from 'react';
import './sass/main.scss';
import Home from './components/Home'
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Footer from './components/Footer';


function App() {

  // States
  const [filter, setFilter] = useState("no-filter")
  const [navLinks, setNavLinks] = useState("hidden");
  const [hamburger, setHamburger] = useState("closed");

  // Handlers
  const handleOnClick = () => {
    navLinks === "hidden" ? setNavLinks("visible") : setNavLinks("hidden")
    hamburger === "closed" ? setHamburger("open") : setHamburger("closed")
  }

  useEffect(() => {
    hamburger === "open" ? setFilter("blurred") : setFilter("no-filter")
  }, [setFilter, hamburger]);



  return (
    <div className="App">
      <Navbar
        setNavLinks={setNavLinks} setHamburger={setHamburger}
        navLinks={navLinks}
        hamburger={hamburger}
        filter={filter}
        handleOnClick={handleOnClick}
      />
      <Home filter={filter} />
      <About filter={filter} />
      <Projects filter={filter} />
      <Contacts filter={filter} />
      <Footer />
    </div>
  );
}

export default App;
