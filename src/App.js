import React from 'react';
import './sass/main.scss';
import Home from './components/Home'
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <section id="about">About</section>
      <section>Projects</section>
    </div>
  );
}

export default App;
