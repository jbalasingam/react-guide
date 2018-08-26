import React from 'react';
import './Person.css';

//create an ES6 function
//children refers to any elements between the opening and closing tags
//can pass a click through props as well
const person = (props) => {

    return (
        <div className="Person">
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
    )
}

export default person;