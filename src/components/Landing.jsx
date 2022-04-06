import React from "react";

const Landing = () => {
  return (

    <div className="landing">
      <div className="gradient"></div>
      <img
        src="https://images.pexels.com/photos/11627764/pexels-photo-11627764.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
        className="background"
      />

      <div className="header">
        <h1 className="name">John McFarland</h1>
        <div className="socials">
            <img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" width='50px'></img>
            <img src = 'https://cdn-icons-png.flaticon.com/512/25/25231.png' width='50px'></img>
        </div>
      </div>
    </div>
  );
};

export default Landing;
