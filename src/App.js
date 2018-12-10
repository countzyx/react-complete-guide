// @flow
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

type Props = {};
type State = {
  persons: Array<{ id: number, age: number, name: string }>,
  showPersons: boolean,
};

class App extends Component<Props, State> {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 },
    ],
    showPersons: false,
  };

  nameChangeHandler = (event: SyntheticEvent<HTMLInputElement>, id: number) => {
    const { persons } = this.state;
    const personIndex = persons.findIndex(p => p.id === id);
    const updatePerson = { ...persons[personIndex] };
    updatePerson.name = event.currentTarget.value;
    const updatePersons = [...persons];
    updatePersons[personIndex] = updatePerson;

    this.setState({
      persons: updatePersons,
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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    };

    let personsOutput = null;

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

      style.backgroundColor = 'red';
    }

    const personCountCssClasses = [];
    if (persons.length <= 2) {
      personCountCssClasses.push('red');
    }

    if (persons.length <= 1) {
      personCountCssClasses.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, I&apos;m a React App!</h1>
        <p className={personCountCssClasses.join(' ')}>
          {persons.length}
          &nbsp;persons listed
        </p>
        <button type="button" onClick={this.togglePersonsHandler} style={style}>
          Toggle Persons
        </button>
        {personsOutput}
      </div>
    );
  };
}

export default App;
