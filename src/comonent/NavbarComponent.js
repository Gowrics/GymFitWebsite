import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarComponent.css';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add or remove `fixed-nav` class based on scroll position
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`navigation ${isScrolled ? 'fixed-nav' : ''}`} 
      id="navbar" 
      expanded={expanded} 
      onToggle={() => setExpanded(!expanded)}
    >
      <Container fluid>
        <Navbar.Brand as={Link} className="navbar-brand-custom" to="/" onClick={() => { window.scrollTo(0, 0); setExpanded(false)}}>
          <h2 className="text-white text-capitalize">
            Gym<span className="text-color">Fit</span>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="navbar-nav" className="text-center">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="nav-item" onClick={() => { window.scrollTo(0, 0);setExpanded(false)}}>Home</Nav.Link>
            <NavDropdown title="Pages" id="dropdown03" className="nav-item dropdown">
              <NavDropdown.Item as={Link} to="/about" className='dropdown-item' onClick={() =>{ window.scrollTo(0, 0); setExpanded(false)}}>About</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/trainer" className='dropdown-item' onClick={() => { window.scrollTo(0, 0);setExpanded(false)}}>Trainer</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/courses" className='dropdown-item' onClick={() =>{ window.scrollTo(0, 0); setExpanded(false)}}>Courses</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/services" className="nav-item" onClick={() =>{ window.scrollTo(0, 0); setExpanded(false)}}>Services</Nav.Link>
            <Nav.Link as={Link} to="/membership" className="nav-item" onClick={() => { window.scrollTo(0, 0); setExpanded(false)}}>Membership</Nav.Link>
            <NavDropdown title="Blog" id="dropdown05" className="nav-item dropdown">
              <NavDropdown.Item as={Link} to="/bloggrid" onClick={() =>{ window.scrollTo(0, 0); setExpanded(false)}}>Blog Grid</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blogsidebar" onClick={() =>{ window.scrollTo(0, 0); setExpanded(false)}}>Blog Sidebar</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blogdetails" onClick={() =>{ window.scrollTo(0, 0); setExpanded(false)}}>Blog Details</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact" className="nav-item" onClick={() =>{ window.scrollTo(0, 0); setExpanded(false)}}>Contact</Nav.Link>
          </Nav>
          <div className="ml-lg-4 mt-4 mt-lg-0 ml-auto text-lg-right mb-3 mb-lg-0 navbar-contact-info">
            <Link className="ph-link" to="tel:+23-345-67890" onClick={() => { window.scrollTo(0, 0);setExpanded(false)}}>
              <h3 className="text-color mb-0">
                <i className="fas fa-mobile-alt mr-2"></i>+23-563-5688
              </h3>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
