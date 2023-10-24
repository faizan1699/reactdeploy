import React from 'react';

import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <Navbar/>
     
      <Routes>

        <Route path='/Home' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='Services' element={<Services />} />

      </Routes>

    </>
  );
}

export default App;
