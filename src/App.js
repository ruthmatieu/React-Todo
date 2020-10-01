import React, { Component } from 'react';

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  /*class state vs function state:
  1. class state is always an obj with class properties
  2. function state - each state property is it's own variable
  */
  constructor() {
    super(); //this is what gives up access to properties
    //initialize state obj
    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
