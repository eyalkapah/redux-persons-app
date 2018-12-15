import React, { Component } from "react";

import "./AddPerson.css";

class AddPerson extends Component {
  state = {
    name: "",
    age: ""
  };

  handleNameChaged = event => {
    this.setState({ name: event.target.value });
  };

  handleAgeChanged = event => {
    this.setState({ age: event.target.value });
  };
  render() {
    return (
      <div className="AddPerson">
        <input
          type="text"
          placeholder="Name"
          onChange={this.handleNameChaged}
          value={this.state.name}
        />
        <input
          type="number"
          placeholder="Age"
          onChange={this.handleAgeChanged}
          value={this.state.age}
        />
        <button
          onClick={() =>
            this.props.personAdded(this.state.name, this.state.age)
          }
        >
          Add Person
        </button>
      </div>
    );
  }
}

export default AddPerson;
