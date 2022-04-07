import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1>My Projects</h1>

      <Row xs={1} md={3} className="g-4 ind">
        <Col>
          <Card>
            <Card.Img
              className="img"
              variant="top"
              src="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="
              width={"50px"}
            />
            <Card.Body>
              <Card.Title>Store Project</Card.Title>
              <Card.Text>
                The project implemented use of Node.Js and created a server
                where you could "buy" RC cars. The project uses MongoDB, Stripe
                Payment, and Cloudinary. Languages used: JavaScript, CSS, and
                HTML
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              className="img"
              variant="top"
              src="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="
              width={"50px"}
            />
            <Card.Body>
              <Card.Title>TypeScript Calculator</Card.Title>
              <Card.Text>
                This project created a calculator that was able to solve
                geometry problems. Languages used: TypeScript
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              className="img"
              variant="top"
              src="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="
              width={"50px"}
            />
            <Card.Body>
              <Card.Title>Breaking Bad API</Card.Title>
              <Card.Text>
                You can search characters in the show Breaking Bad. It will give
                you information on those characters. Languages used: JavaScript,
                HTML, and CSS
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs={1} md={3} className="g-4 ind">
        <Col>
          <Card>
            <Card.Img
              className="img"
              variant="top"
              src="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="
              width={"50px"}
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              className="img"
              variant="top"
              src="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="
              width={"50px"}
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img
              className="img"
              variant="top"
              src="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="
              width={"50px"}
            />
            <Card.Body id="resume">
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className="button" >
        <Button variant="success" className="btn">
          Resume
        </Button>
      </div>
    </div>
  );
};

export default Projects;
