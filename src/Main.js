import React from "react";
import ReadingChoiceCircle from "./ReadingChoiceCircles";
import CardTable from "./CardTable.js";
import "./Main.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "choiceScreen",
      readChoice: "",
    };
  }

  render() {
    return (
      <div className="MainContainer">
        {this.state.view === "choiceScreen" && (
          <div className="ReadingChoicePrompt">
            <h1>Choose a Reading:</h1>
            <ReadingChoiceCircle
              handleChoiceClick={() => {
                this.setState({
                  readChoice: 3,
                  view: "readingScreen",
                });
              }}
              title="THREE CARD"
              id="3"
              img="Tri"
              alt="Past, Present, Future"
              color="#3D9BFF"
            />
            <ReadingChoiceCircle
              handleChoiceClick={() => {
                this.setState({
                  readChoice: 1,
                  view: "readingScreen",
                });
              }}
              id="1"
              title="SINGLE"
              img="Single"
              alt="Daily Outlook"
              color="#FF9900"
            />
          </div>
        )}
        {this.state.view === "readingScreen" && (
          <CardTable readChoice={this.state.readChoice} />
        )}
      </div>
    );
  }
}

export default Main;
