import { ADD, DELETE } from "./actions";

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const newPerson = {
        id: Math.random(), // not really unique but good enough here!
        name: action.personData.name,
        age: action.personData.age
      };
      return { persons: state.persons.concat(newPerson) };
    case DELETE:
      return {
        persons: state.persons.filter(person => person.id !== action.personId)
      };
  }
  return state;
};

export default reducer;
