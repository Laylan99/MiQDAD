import React from 'react';
import './Person.css';
const person = (props ) =>{
    
    return (
       <div className="Person">
       <h2 onClick={props.clickbka}>Im a {props.name} with {props.age } years </h2>
       <input type="text" onChange={props.changed}></input>
       </div>

    );

};
export default person;

