import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person'
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
    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons]
    persons[personIndex] = person;
    this.setState({
      persons
    })
  }
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })

  }
  render() {
    const style = {
      color: 'white',
      backgroundColor: 'green',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
     
    }
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((onePerson, index) => {
              return (<Person
                name={onePerson.name}
                age={onePerson.age}
                click={this.deletePersonHandler.bind(this, index)}
                key={onePerson.id}
                changed={(event) => this.changeNameHandler(event, onePerson.id)}
              />
              )
            })
          }

        </div>
      );
      style.backgroundColor = "red";
      
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');

    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
     
        <div className="App">
          <div>hello from the other side</div>
          <h1> hi react js </h1>
          <p className={classes.join(' ')} >this is realy working</p>
          <button
            style={style}
            onClick={this.togglePersonsHandler} >Switch Name</button>

          {persons}

        </div>
   
    );
  }
}

export default App;
