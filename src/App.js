import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import './index.css';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import Service from './components/service/Service';
import Blogs from './components/blogs/Blogs';
import Pricing from './components/pricing/Pricing';



function App() {

  
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/service' element={<Service />} />
        <Route path='/Pricing' element={<Pricing />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
