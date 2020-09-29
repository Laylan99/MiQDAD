import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = { //reaturn array of two elements when we import use state instead of components you use this to handle states
    person:[//first element we return back is our state hera is person and other state till );
      {id:"11", name: 'Max' , age:33},
      {id:"13",name: 'Man' , age:23},
      {id:"15",name: 'Sa' , age:45}
    ],
    showPersons : false
  }  

changeNameHandler = (event,idItem) =>{
  const personIndex = this.state.person.findIndex(p => {
    return p.id === idItem;//return true or false
  });
  const person ={
    ...this.state.person[personIndex]
  };
  person.name = event.target.value;
  const persons = [...this.state.person];
  persons[personIndex]=person;
  
  this.setState ({person:persons});
  }
  togglePersonHandler = ( )=> {
       const doesShow = this.state.showPersons;
       this.setState({showPersons : !doesShow}); 
  }
 deletePerson = (index) =>{
  const persons =this.state.person.slice();
   persons.splice(index, 1);
   this.setState({person: persons}) 
 }
  render(){
    const style= {
      backgroundColor: 'green',
      font : 'inherit',
      border: '1px solid blue',
      cursor : 'pointer',
      color:'white',
     
    };
    let persons=null;
     if (this.state.showPersons){
      persons=(
        
        <div> 
          {this.state.person.map((person ,index)=>{
            return <Person 
            clickbka={() =>this.deletePerson(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.changeNameHandler(event , person.id)}/>
          })}</div>
      ) ;
      style.backgroundColor="red";
  
     }  
     const classes =[ ]; //string
     if (this.state.person.length <=2){
       classes.push('red');
     }
     if(this.state.person.length <=1){
       classes.push('bold');
     }

    //style
    return (
    <div className="App">
      <h1>HI</h1> 
        <p className= {classes.join( ' ')} >i wrote it </p> 
        <button
        style={style}
         onClick={this.togglePersonHandler}> Show and Hide</button>
       {persons}
     </div>);
     //return React.createElement('div',{className:'App'},React.createElement('h1',null,"hello"),'HI');
    }
  }

export default App;

