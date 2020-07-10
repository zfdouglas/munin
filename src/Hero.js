import React from "react";
import "./hero.css";

const Hero = ({ handleClick }) => {
  const onClick = handleClick;

  return (
    <div className="HeroContainer">
      <p>Hail & Well Met!</p>
      <div className="HeroButton">
        <button onClick={onClick}>Onwards</button>
      </div>
    </div>
  );
};

export default Hero;
