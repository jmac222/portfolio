import React from "react";
import back from '../asset/back.webp'
import linken from '../asset/linken.png'
import git from '../asset/git.png'


const Landing = () => {
  return (

    <div className="landing" id="home">
      <div className="gradient"></div>
      <img
        src={back}
        alt=""
        className="background"
      />

      <div className="header">
        <h1 className="name">John McFarland</h1>
        <div className="socials">
            <a href="https://www.linkedin.com/in/john-mcfarland-008b92236"><img src={linken} width='50px'></img></a>
            <a href = 'https://github.com/jmac222'><img src = {git} width='50px'></img></a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
