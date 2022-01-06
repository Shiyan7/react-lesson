import React from "react";
import "./TodoItem.scss";

export const TodoItem = ({todo, onChange, onClick, onRemove}) => {

    const { name, completed, id, date } = todo;

    const cls = ['d-block me-auto user-select-none'];

    if (todo.completed) cls.push('completed')
    if (todo.important) cls.push('important')

    return (
        <li className="todo-item list-group-item" >
        <span className="todo-item__date">{date}</span>
        <div className="todo-item__bottom d-flex align-items-center">
            <input
                type="checkbox"
                className="checkbox"
                checked={completed}
                onChange={() => onChange(id)}
                id={id}
            />
            <label htmlFor={id} className={cls.join(' ')}>
                {name}
            </label>
            &nbsp;
            <button className="todo-item__btn btn btn-danger btn--remove" onClick={() => onRemove(id)}>
                <i className="fas fa-trash-alt"></i>
            </button>
            <button className="todo-item__btn btn btn-success btn--warning" onClick={() => console.log('Rename todo')} >
                <i className="fas fa-pen"></i>
            </button>
            <button className="todo-item__btn btn btn-warning btn--important" onClick={() => onClick(id)} >
                <i className="fas fa-exclamation"></i>
            </button>
        </div>
        </li>
    )
};