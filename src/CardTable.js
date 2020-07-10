import React from "react";
import TarotCard from "./TarotCard.js";
import "./cardtable.css";
class CardTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      readChoice: props.readChoice,
      cardData: [],
      loading: true,
    };
  }
  componentDidMount() {
    fetch("http://localhost:8080/api/v1/cardsShuffled/" + this.state.readChoice)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ cardData: data, loading: false });
      })
      .catch(console.log);
  }

  render() {
    return (
      <div>
        {this.state.loading ? null : (
          <div>
            {this.state.readChoice === 3 && (
              <div className="threeReader">
                <TarotCard cardData={this.state.cardData[0]} label="PAST" />
                <TarotCard label="PRESENT" cardData={this.state.cardData[1]} />
                <TarotCard cardData={this.state.cardData[2]} label="FUTURE" />
              </div>
            )}
            {this.state.readChoice === 1 && (
              <div className="oneReader">
                <TarotCard cardData={this.state.cardData[0]} label="TODAY" />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default CardTable;
