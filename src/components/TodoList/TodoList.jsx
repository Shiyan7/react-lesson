import React from "react";
import { TodoItem } from "../TodoItem/TodoItem";
import "./TodoList.scss";

export const TodoList = ({date, todos, onToggleDone, onToggleImportant, removeTodo}) => {

    const todoItems = todos.map (todo => {
        return (
            <TodoItem
                key={todo.id}
                todo={todo}
                onChange={onToggleDone}
                onClick={onToggleImportant}
                onRemove={removeTodo}
            />
        )
    });

    if(!todos.length) return <h3 className="no-todos" >Дел нет...</h3>


    return (
        <ul className="todo-list list-group">
            { todoItems }
        </ul>
    )
}