import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import { ADD, DELETE } from "../store/actions";

class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAdd} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDelete(person.id)}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProp = state => {
  return {
    persons: state.persons
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (name, age) => dispatch({ type: ADD, personData: { name, age } }),
    onDelete: personId => dispatch({ type: DELETE, personId: personId })
  };
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(Persons);
