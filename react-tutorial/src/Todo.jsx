import React from 'react'

const Todo = ({ todo, toggleTodo }) => {

    const handleToggleClick = () => {
        toggleTodo(todo.id);
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.completed} readOnly onChange={handleToggleClick} />
            </label>
            {todo.name}
        </div>
    );
};

export default Todo