import React, { Component } from "react";
class ClassForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    console.log(this.state.name, this.state.email, this.state.password);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleNameChange}
            value={this.state.name}
            type="text"
            placeholder="Name"
          ></input>
          <input
            onChange={this.handleEmailChange}
            value={this.state.email}
            type="email"
            placeholder="Email"
          ></input>
          <input
            onChange={this.handlePasswordChange}
            value={this.state.password}
            type="password"
            placeholder="Password"
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}
export default ClassForm;
