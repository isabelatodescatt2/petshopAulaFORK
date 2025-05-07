import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import petshoplogo from '../imagens/petshoplogo.png'

function NavbarMenu() {
  return (
    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">
            <img src='' alt=''/>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#BanhoTosa">Banho e Tosa</Nav.Link>
            <Nav.Link href="#pricing">Hotel e Resort</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavbarMenu