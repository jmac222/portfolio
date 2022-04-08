import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {BsBook} from 'react-icons/bs'
const Navigation = () => {
  return (
    <Navbar bg = 'dark' variant='dark' fixed='top'>
        <Container>
    <Navbar.Brand href="#home"><BsBook/> JM</Navbar.Brand>
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