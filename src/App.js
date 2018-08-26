import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


//state is manage from inside components only
//state is only available in components
class App extends Component {

  state = {
    persons: [
      { id: 'asdfs', name: 'Max', age: 28 },
      { id: 'asdsdwfs', name: 'Manu', age: 30 },
      { id: 'asdwefqfs', name: 'Stephanie', age: 32 }
    ],
    otherState: 'some other state',
    showPersons: false

  }

  // switchNameHandler = (newName) => {
  //   //console.log('Was clicked!');
  //   //Don't do this this.state.persons[0].name = 'Maximilian'
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 30 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   })
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    // !doesShow will just do the opposite of true and false
    this.setState({ showPersons: !doesShow })
  }

  deletePersonsHandler = (personIndex) => {
    // use the spread operator to copy the array in an immutable fasion so you dont change the original array
    const persons = [...this.state.persons];
    // 1 just says to splice one element (so one name at a time)
    // the index is passed into personIndex so it only deletes what you click
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  //access the state 
  //onClick has to have capital C
  //you can also pass methods as props like we have with click
  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* map automatically adds index so you can use that to get the index of each "this" */}
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonsHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />

          })}
        </div>
      )

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };

    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); //classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (

      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>

    );
    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Hi, I\'m a React App!!!'))
  }
}

export default App;
