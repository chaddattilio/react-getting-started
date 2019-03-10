import React from "react";
import Axios from "axios";
import "babel-polyfill";

class Form extends React.Component {
  state = { userName: "" };
  // prettier-ignore
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await Axios.get(
      `https://api.github.com/users/${this.state.userName}`
    );
    this.props.onSubmit(resp.data);
    this.setState({ userName: ''});
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Github username"
          value={this.state.userName}
          onChange={event => this.setState({ userName: event.target.value })}
          required
        />
        <button>Add card</button>
      </form>
    );
  }
}

export default Form;
