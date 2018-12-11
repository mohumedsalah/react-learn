import React from 'react'
import classes from  './Person.css'
const person = (props)=>{
   
    return (
        <div className={classes.Person}  >
            <p>{props.children}</p>
            <p onClick={props.click} >  I'm {props.name} Hello Here and iam {props.age} years old</p>
            <input onChange={props.changed} value={props.name} />
        </div>
    )
}

export default person;