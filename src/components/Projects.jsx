import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const Projects = () => {
  return (
    <div className='projects'>
        <h1>My Projects</h1>
        <Container>
            <Row className='aa'>
                <Col className='ab' md={5}>Bru</Col>
                <Col className='ab' md={{ span: 5, offset: 2 }}>Bru</Col>
                
            </Row>
        </Container>
        
    </div>
  )
}

export default Projects