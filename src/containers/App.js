// @flow
import React, { Component } from "react";
import styles from "./App.module.css";
import Person from "../components/Persons/Person/Person";

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
    let buttonClass = "";
    if (showPersons) {
      personsOutput = (
        <div>
          {persons.map((p, i) => (
            <Person
              onClickHandler={() => this.deleteNameHandler(i)}
              name={p.name}
              age={p.age}
              key={p.id}
              onChangeHandler={event => this.nameChangeHandler(event, p.id)}
            />
          ))}
        </div>
      );
      buttonClass = styles.Red;
    }

    const personCountCssClasses = [];
    if (persons.length <= 2) {
      personCountCssClasses.push(styles.red);
    }

    if (persons.length <= 1) {
      personCountCssClasses.push(styles.bold);
    }

    return (
      <div className={styles.App}>
        <h1>Hi, I&apos;m a React App!</h1>
        <p className={personCountCssClasses.join(" ")}>
          {persons.length}
          &nbsp;persons listed
        </p>
        <button
          type="button"
          className={buttonClass}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </button>
        {personsOutput}
      </div>
    );
  };
}

export default App;
