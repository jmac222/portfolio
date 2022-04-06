import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
const Navigation = () => {
  return (
    <Navbar bg = 'dark' variant='dark' fixed='top'>
        <Container>
    <Navbar.Brand href="#home">Home</Navbar.Brand>
    <Nav className="justify-content-end">
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#resume">Resume</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    </Container>
    </Navbar>

  )
}

export default Navigation