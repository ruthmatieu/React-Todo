// your components will all go in this `component` directory.

import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    return (
        <div>
            {props.todoList.map(item => (
                // <Todo key={item.id} item={item}/>
            ))}
        </div>
    ) 
};

export default TodoList;
