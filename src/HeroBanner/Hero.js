import React from "react";
import "./hero.css";

const Hero = ({ handleClick }) => {
  const onClick = handleClick;

  return (
    <div className="HeroContainer">
      <p className="HeroTitle">Hail & Well Met</p>
      <div className="HeroSubTitleContainer">
        <p>
          This is the user interface to display the functionality of the Munin
          API. That is, an API that allows you to access a database of tarot
          cards, complete with card data and interpretations.
        </p>
      </div>
      <div className="HeroButton">
        <button onClick={onClick}>Onwards</button>
      </div>
    </div>
  );
};

export default Hero;
