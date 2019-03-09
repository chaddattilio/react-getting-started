import React from "react";
import { render } from "react-dom";
import CardList from "./CardList";
import "./style.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <CardList />
      </div>
    );
  }
}

render(<App title="The GitHub Cards App" />, document.getElementById("root"));
