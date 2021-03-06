import React from "react";
import logogif from "../img/ravengif.gif";
import Hero from "../HeroBanner/Hero.js";
import "./App.css";
import Main from "../BaseContainer/Main.js";
import Documentation from "../Documentation/Documentation.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "welcomeScreen",
    };
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    this.setState({
      view: "started",
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo">
            <img src={logogif} className="App-logo" alt="logo" />
          </div>

          <p
            onClick={() => {
              this.setState({
                view: "welcomeScreen",
              });
            }}
          ></p>
          <div
            onClick={() => {
              this.setState({
                view: "welcomeScreen",
              });
            }}
            className="muninHeader"
          >
            MUNIN
          </div>

          <p className="Documentation">
            <span
              onClick={() => {
                this.setState({
                  view: "documentation",
                });
              }}
            >
              Documentation
            </span>
          </p>
        </header>
        {this.state.view === "welcomeScreen" && (
          <Hero handleClick={this.toggleView} />
        )}
        {this.state.view === "started" && <Main />}
        {this.state.view === "documentation" && <Documentation />}
      </div>
    );
  }
}

export default App;
