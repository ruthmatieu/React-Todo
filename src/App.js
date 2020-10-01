import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todos = [
  {
    task: 'Organize Garage',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Walk Kippy',
    id: Date.now(),
    completed: false
  },
  {
    task: '15 Min Workout',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Laundry',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Complete work project',
    id: Date.now(),
    completed: false
  }
]

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
      todos
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm/>
        <TodoList todoList={this.state.todos}/>
      </div>
    );
  }
}

export default App;
