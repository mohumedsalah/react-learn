import React, { Component } from 'react';

import classes from './App.css';
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
    
    let persons = null;
    let btnClass = '';
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
      btnClass = classes.Red;
      
    }
    const _classes = [];
    if (this.state.persons.length <= 2) {
      _classes.push(classes.red);

    }
    if (this.state.persons.length <= 1) {
      _classes.push(classes.bold);
    }
    return (
     
        <div className={classes.App}>
          <div>hello from the other side</div>
          <h1> hi react js </h1>
          <p className={_classes.join(' ')} >this is realy working</p>
          <button
           className={btnClass}
            onClick={this.togglePersonsHandler} >Switch Name</button>

          {persons}

        </div>
   
    );
  }
}

export default App;
