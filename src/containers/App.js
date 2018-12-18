// @flow
import React, { Component } from "react";
import Styles from "./App.module.css";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";

type Props = {};
type State = {
  persons: Array<{ id: number, age: number, name: string }>,
  showPersons: boolean
};

class App extends Component<Props, State> {
  state = {
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Manu", age: 29 },
      { id: 3, name: "Stephanie", age: 26 }
    ],
    showPersons: false
  };

  nameChangeHandler = (event: SyntheticEvent<HTMLInputElement>, id: number) => {
    const { persons } = this.state;
    const personIndex = persons.findIndex(p => p.id === id);
    const updatePerson = { ...persons[personIndex] };
    updatePerson.name = event.currentTarget.value;
    const updatePersons = [...persons];
    updatePersons[personIndex] = updatePerson;

    this.setState({
      persons: updatePersons
    });
  };

  deleteNameHandler = (personIndex: number) => {
    const { persons } = this.state;
    const newPersons = [...persons];
    newPersons.splice(personIndex, 1);
    this.setState({ persons: newPersons });
  };

  togglePersonsHandler = () => {
    const { showPersons } = this.state;
    this.setState({ showPersons: !showPersons });
  };

  render = () => {
    const { persons, showPersons } = this.state;

    let personsOutput = null;
    if (showPersons) {
      personsOutput = (
        <div>
          <Persons
            persons={persons}
            onChangeHandler={this.nameChangeHandler}
            onClickHandler={this.deleteNameHandler}
          />
        </div>
      );
    }

    return (
      <div className={Styles.App}>
        <Cockpit
          personsCount={persons.length}
          togglePersonsHandler={this.togglePersonsHandler}
          useRedButton={showPersons}
        />
        {personsOutput}
      </div>
    );
  };
}

export default App;
