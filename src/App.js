import React from "react";
import { render } from "react-dom";
import CardList from "./CardList";
import Form from "./Form";
import "./style.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: []
    };
  }

  addNewProfile = profileData => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

render(<App title="The GitHub Cards App" />, document.getElementById("root"));
