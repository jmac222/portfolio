import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import FadeInSection from "./Fade";
import store from '../asset/store.png'
import allsports from '../asset/allsports.png'
const Projects = () => {
  return (
    <div className="background">
    <div className="projects" id="projects">
      <h1>My Projects</h1>
      <FadeInSection>
      <div className="project-container">

        <div className="card-row">
          <div className= 'card'>
            <div className="back-card card-side">
              <button onClick={() => {
                window.open("https://desolate-thicket-49821.herokuapp.com/")
              }}>View Live Server</button>
              <button onClick={() => window.open('https://github.com/jmac222/store-project')}>View Source Code</button>
            </div>
            <div className="front-card card-side">
              <img src={store} ></img>
              <h2>RC Car Vendor</h2>
              <p>This project allows the user to buy and sell RC cars. The user has the ability to upload a car to sell it. The user can also add to cart and buy it using Stripe. The project uses Node.js! Skills used were: <b>MongoDB, Node.js, Stripe, Javascript, HTML5, CSS3, Libraries</b></p>
            </div>

          </div>
          <div className= 'card'>
            <div className="back-card card-side">
              <button onClick={() => {
                window.open("https://sports-all.herokuapp.com/")
                
              }}>View Live Server</button>
              <button onClick={() => window.open('https://github.com/jmac222/sports-page')}>View Source Code</button>
            </div>
            <div className="front-card card-side">
              <img src={allsports}></img>
              <h2>AllSports API</h2>
              <p>This project used a sports API to demonstrate the teams records from either the current season or last years season. Leagues included are NFL, NBA, MLB, and NHL. You can also click on the individual teams to see information on that team on the ESPN page. Skills used were: <b>API Usage, CSS, HTML5, React, Javascript</b></p>
            </div>

          </div>
          <div className= 'card'>
            <div className="back-card card-side">
              <button>View Live Server</button>
              <button>View Source Code</button>
            </div>
            <div className="front-card card-side">
              <img src="" width='300px' height='200px'></img>
              <h2>AllSports API</h2>
              <p>This project used a sports API to demonstrate the teams records from either the current season or last years season. You can also click on individual teams to open up a new tab on information about that team on ESPN. Skills used were: <b>MongoDB, Node.js, Stripe, Javascript, HTML5, CSS3, Libraries</b></p>
            </div>

          </div>
        </div>
        <div className="card-row">
          <div className= 'card'>
            <div className="back-card card-side">
              <button>View Live Server</button>
              <button>View Source Code</button>
            </div>
            <div className="front-card card-side">
              <img src="" width='300px' height='200px'></img>
              <h2>Store Project</h2>
              <p>This project allows the user to buy and sell RC cars. Skills used were: <b>MongoDB, Node.js, Stripe, Javascript, HTML5, CSS3, Libraries</b></p>
            </div>

          </div>
          <div className= 'card'>
            <div className="back-card card-side">
              <button>View Live Server</button>
              <button>View Source Code</button>
            </div>
            <div className="front-card card-side">
              <img src="" width='300px' height='200px'></img>
              <h2>Store Project</h2>
              <p>This project allows the user to buy and sell RC cars. Skills used were: <b>MongoDB, Node.js, Stripe, Javascript, HTML5, CSS3, Libraries</b></p>
            </div>

          </div>
          <div className= 'card'>
            <div className="back-card card-side">
              <button>View Live Server</button>
              <button>View Source Code</button>
            </div>
            <div className="front-card card-side">
              <img src="" width='300px' height='200px'></img>
              <h2>Store Project</h2>
              <p>This project allows the user to buy and sell RC cars. Skills used were: <b>MongoDB, Node.js, Stripe, Javascript, HTML5, CSS3, Libraries</b></p>
            </div>

          </div>
        </div>

      </div>
      
      <div className="button" >
        <Button variant="success" className="btn">
          Resume
        </Button>
      </div>
      </FadeInSection>
    </div>
    </div>
  );
};

export default Projects;
