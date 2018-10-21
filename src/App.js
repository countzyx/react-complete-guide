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

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Maxi', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 25 },
      ],
    });
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
          <Person name={persons[0].name} age={persons[0].age} />
          <Person
            name={persons[1].name}
            age={persons[1].age}
            onClickHandler={this.switchNameHandler}
            onChangeHandler={this.nameChangeHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person name={persons[2].name} age={persons[2].age} />
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
