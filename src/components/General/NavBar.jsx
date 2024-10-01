import React from 'react';
import { Navbar, Nav, Container, Form, Button, InputGroup } from 'react-bootstrap';
import Logo from '../General/logo_web.png'
function NavBar() {
  return (
    <Navbar bg="light" expand="lg" style={{padding:'15 px'}}>
      <Container >
        <Navbar.Brand href="/"><img src={Logo} alt={Logo} style={{width:'33%'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#stores">Stores</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            
          </Nav>
          
          <Nav className="ms-auto">
          <Nav.Link href="#cart">
            <i class="bi bi-cart3"></i>
            </Nav.Link>
            <Nav.Link href="#wishlist">
            <i class="bi bi-heart"></i>
            </Nav.Link>
          <Form className="d-flex">
            <InputGroup>
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button variant="outline-success">
              <i class="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Form>
            
          
          </Nav>
          <Nav className='mr-auto'>
          <Nav.Link>
            <Button><i class="bi bi-person"></i> Login</Button>
            
            </Nav.Link>
            <Nav.Link>
            <Button variant='success'><i class="bi bi-person"></i> Register</Button>
            
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;