// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './comonent/NavbarComponent';
import FooterComponent from './comonent/FooterComponent';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from './screens/Home';
import About from './screens/About';
import Trainers from './screens/Trainers';
import CoursePage from './screens/Courses';
import Services from './screens/Services';
import Membership from './screens/Membership';
import BlogGrid from './screens/BlogGrid';
import BlogSideBar from './screens/BlogSideBar';
import BlogDetails from './screens/BlogDetails';
import Contact from './screens/Contact';

function App() {
  return (
    <Router>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/trainer" element={<Trainers />} /> 
        <Route path="/courses" element={<CoursePage />} /> 
        <Route path="/services" element={<Services />} /> 
        <Route path="/membership" element={<Membership />} /> 
        <Route path="/bloggrid" element={<BlogGrid/>} /> 
        <Route path="/blogsidebar" element={<BlogSideBar/>} />
        <Route path="/blogdetails" element={<BlogDetails/>} />
        <Route path="/contact" element={<Contact/>} />
         
      </Routes>
      <FooterComponent/>

    </Router>
  );
}

export default App;
