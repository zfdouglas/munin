import React from "react";
import "./TarotCard.css";
import Sword from "../img/swordmine2.svg";
import Cup from "../img/cupmine2.svg";
import Wand from "../img/wandsmine2.svg";
import Pentacles from "../img/pentaclemine2.svg";
import Ravens from "../img/ravenlines2w.svg";

const TarotCard = (props) => {
  //Returns image path based on the passed in argument.
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
  //Returns the roman numeral corresponding to the argument's value
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
  //Takes an array and splits the array at each comma, returning each value.
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
