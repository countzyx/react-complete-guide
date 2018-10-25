// @flow
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

type Props = {};
type State = {
  persons: Array<{ age: number, name: string }>,
  showPersons: boolean,
};

class App extends Component<Props, State> {
  state = {
    persons: [{ name: 'Max', age: 28 }, { name: 'Manu', age: 29 }, { name: 'Stephanie', age: 26 }],
    showPersons: false,
  };

  nameChangeHandler = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.currentTarget.value, age: 29 },
        { name: 'Stephanie', age: 26 },
      ],
    });
  };

  deleteNameHandler = (personIndex: number) => {
    const { persons } = this.state;
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  togglePersonsHandler = () => {
    const { showPersons } = this.state;
    this.setState({ showPersons: !showPersons });
  };

  render = () => {
    const { persons, showPersons } = this.state;
    const style = {
      backgroundColor: 'white',
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
            <Person onClickHandler={() => this.deleteNameHandler(i)} name={p.name} age={p.age} />
          ))}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I&apos;m a React App!</h1>
        <button type="button" onClick={this.togglePersonsHandler} style={style}>
          Toggle Persons
        </button>
        {personsOutput}
      </div>
    );
  };
}

export default App;
