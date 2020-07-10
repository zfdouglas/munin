import React from "react";
import logogif from "./ravengif.gif";
import Hero from "./Hero.js";
import "./App.css";
import Main from "./Main.js";

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
          >
            <div className="muninHeader"> MUNIN</div>
          </p>
        </header>
        {this.state.view === "welcomeScreen" && (
          <Hero handleClick={this.toggleView} />
        )}
        {this.state.view === "started" && <Main />}
      </div>
    );
  }
}

export default App;
