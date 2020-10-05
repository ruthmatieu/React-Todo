import React, { Component } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const todos = [
  {
    task: 'Organize Garage',
    id: 1,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 2,
    completed: false
  },
  {
    task: 'Walk Kippy',
    id: 3,
    completed: false
  },
  {
    task: '15 Min Workout',
    id: 4,
    completed: false
  },
  {
    task: 'Laundry',
    id: 5,
    completed: false
  },
  {
    task: 'Complete work project',
    id: 6,
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

  addItem = (item) => {
    const newItem = {
      task: item,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newItem ]
    })
  }

  toggleItem = itemId => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    })
  }

  clearCompleted = event => {
    event.preventDefault();
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(item => !item.completed)
    })
  }
  render() {
    return (
      <div>
        <h2>Tudu App</h2>
        <TodoForm addItem={this.addItem}/>
        <TodoList 
          toggleItem={this.toggleItem}
          todoList={this.state.todos}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
