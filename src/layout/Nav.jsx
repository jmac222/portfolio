import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
const Navigation = () => {
  return (
    <Navbar bg = 'dark' variant='dark' fixed='top'>
        <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="justify-content-end">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
    </Navbar>

  )
}

export default Navigation