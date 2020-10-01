import React, { Component } from 'react';

class TodoForm extends Component {
    render() {
        return (
            <form>
                <label>
                    <input
                        type="text"
                        name="item"
                        placeholder="...enter an item."
                    />
                </label>
                <button>Submit</button>
            </form>
        )
    }
};

export default TodoForm;