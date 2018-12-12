import React from 'react'
import classes from './Cockpit.css'

const Cockpit = (props) =>{
    const _classes = [];
    if (props.persons.length <= 2) {
      _classes.push(classes.red);

    }
    if (props.persons.length <= 1) {
      _classes.push(classes.bold);
    }



    return (
        <div className={classes.Cockpit} >
            <div>hello from the other side</div>
            <h1> hi react js </h1>
            <p className={_classes.join(' ')} >this is realy working</p>
            <button
                className={props.btnClass}
                onClick={props.togglePersons} >
                Switch Name
            </button>
        </div>
    );
} 


export default Cockpit;