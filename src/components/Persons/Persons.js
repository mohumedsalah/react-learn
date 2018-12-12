

import Person from './Person/Person'
import React from 'react'


const Persons =(props) => props.persons.map((onePerson, index) => {
    return (<Person
      name={onePerson.name}
      age={onePerson.age}
      click={()=> props.click(index)}
      key={onePerson.id}
      changed={(event) => props.changed(event, onePerson.id)}
    />
    )
  })

export default Persons;