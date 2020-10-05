import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(){
        super()
        this.state = {
            newTask: ''
        };
    };

    changeHandler = event => {
        
        this.setState({
            ...this.state, newTask: event.target.value
        });
    };

    submitForm = event => {
        event.preventDefault();
        this.props.addItem(this.state.newTask);
        this.setState({...this.state, newTask: ''});
    }
    render() {
        return (
            <form onSubmit={this.submitForm}>
                <label>
                    <input
                        type="text"
                        name="item"
                        placeholder="...enter an item."
                        value={this.state.newTask}
                        onChange={this.changeHandler}
                    />
                </label>
                <button>Submit</button>
            </form>
        )
    }
};

export default TodoForm;