// NavbarComponent.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavbarComponent.css';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar expand="lg" fixed="top" className="navigation" id="navbar">
      <Container fluid>
        <Navbar.Brand as={Link} className="navbar-brand-custom" to="/">
          <h2 className="text-white text-capitalize">
            Gym<span className="text-color">Fit</span>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="text-center">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="nav-item">
              Home
            </Nav.Link>
            <NavDropdown title="Pages." id="dropdown03" className="nav-item dropdown">
              <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/trainer">Trainer</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/courses">Courses</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/services" className="nav-item">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/membership" className="nav-item">
              Membership
            </Nav.Link>
            <NavDropdown title="Blog." id="dropdown05" className="nav-item dropdown">
              <NavDropdown.Item as={Link} to="/bloggrid">Blog Grid</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blogsidebar">Blog Sidebar</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blogdetails">Blog Details</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact" className="nav-item">
              Contact
            </Nav.Link>
          </Nav>
          <div className="ml-lg-4 mt-4 mt-lg-0 ml-auto text-lg-right mb-3 mb-lg-0 navbar-contact-info">
            <Link className="ph-link" to="tel:+23-345-67890">
              <h3 className="text-color mb-0">
                <i className="fas fa-mobile-alt mr-2"></i>
                +23-563-5688
              </h3>
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
