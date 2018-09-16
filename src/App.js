// @flow
import React from 'react';
import './App.css';
import Person from './Person/Person';

const App = () => (
  <div className="App">
    <h1>Hi, I&apos;m a React App!</h1>
    <Person name="Max" age="28" />
    <Person name="Manu" age="29">
      My Hobbies: Racing
    </Person>
    <Person name="Stephanie" age="26" />
  </div>
);

export default App;
