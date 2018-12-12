import React, { Component } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
class App extends Component {
  state = {
    persons: [
      { id: 'sadrweqrsdf', name: "salah", age: 22 },
      { id: 'swsardadf1', name: "kareem", age: 23 },
      { id: 'sa12df', name: "yousif", age: 5 }
    ],
    showPersons: false
  };
  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({
      persons
    })
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }
  render() {
    let persons = null;
    let btnClass = '';
    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.changeNameHandler}
        />
      btnClass = classes.Red;
    }
    return (
      <div className={classes.App}>
        <Cockpit
          persons={this.state.persons}
          btnClass={btnClass}
          togglePersons={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}
export default App;
