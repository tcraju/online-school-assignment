import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './Header.css'
const Header = () => {
  return (
    <>
      <Navbar bg="primary-custom" variant="dark" className="nav-area">
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
          <Nav.Link href="#mentors">Mentors</Nav.Link>
          <Nav.Link href="#features">Courses</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </>
  );
};

export default Header;