import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Header from './Component/Header';
import Play from './pages/Play';
import About from './pages/About';

function App (){
    return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route index element={<Home/>} />
        <Route path="About" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="signup" element={<Play/>}/>
        <Route path="*" element={<NoPage/>} />
      </Routes>
      </BrowserRouter>
      </>
    )
}

export default App;
