import React from "react";
import Tri from "../img/triquetra.svg";
import Single from "../img/tarot2.svg";
import "./Main.css";
const ReadingChoiceCircles = (props) => {
  function imageChooser(option) {
    if (option === "Tri") {
      return Tri;
    } else if (option === "Single") {
      return Single;
    }
  }

  return (
    <div className="ReadingChoiceHolder">
      <div
        className="ReadingChoiceCircle"
        style={{ backgroundColor: props.color }}
        onClick={props.handleChoiceClick}
      >
        <img src={imageChooser(props.img)} alt={props.alt} />
      </div>
      <h3>{props.title}</h3>
    </div>
  );
};
export default ReadingChoiceCircles;
