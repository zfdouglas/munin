import React from "react";
import "./TarotCard.css";
import Sword from "./swordmine2.svg";
import Cup from "./cupmine2.svg";
import Wand from "./wandsmine2.svg";
import Pentacles from "./pentaclemine2.svg";
import Ravens from "./ravenlines2w.svg";

const TarotCard = (props) => {
  function imageChooser(suit) {
    if (suit === "Cups") {
      return Cup;
    } else if (suit === "Swords") {
      return Sword;
    } else if (suit === "Wands") {
      return Wand;
    } else if (suit === "Pentacles") {
      return Pentacles;
    } else {
      return Ravens;
    }
  }
  function getRomanNumerals(number) {
    if (number === "1") {
      return "I";
    } else if (number === "2") {
      return "II";
    } else if (number === "3") {
      return "III";
    } else if (number === "4") {
      return "IV";
    } else if (number === "5") {
      return "V";
    } else if (number === "6") {
      return "VI";
    } else if (number === "7") {
      return "VII";
    } else if (number === "8") {
      return "VIII";
    } else if (number === "9") {
      return "IX";
    } else if (number === "10") {
      return "X";
    }
  }
  function definitionFormatter(def) {
    return def.split(",");
  }
  return (
    <div>
      <h2 className="tarotHeader">{props.label}</h2>
      <div className="TarotCard">
        <div className="dataHolder">
          <div className="inner">
            <div className="front">
              <div className="tarotName">{props.cardData.Name}</div>
              <div className="imageHolder">
                <img
                  className="tarotImage"
                  src={imageChooser(props.cardData.Suit)}
                  alt={props.cardData.Suit}
                />
              </div>
              <div className="tarotValue">
                {getRomanNumerals(props.cardData.Value)}
              </div>
            </div>
            <div className="back">
              <h3>Reading:</h3>
              <div className="uprightDefinitionHolder">
                <div className="uprightDefinition">
                  {definitionFormatter(props.cardData.UprightDef).map((val) => (
                    <li>{val}</li>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TarotCard;
