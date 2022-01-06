import React, { useEffect, useState } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { Toolbar } from "../Toolbar/Toolbar";
import { TodoList } from "../TodoList/TodoList";
import { AddTodo } from "../AddTodo/AddTodo";
import "./App.scss";

export const App = () => {

    let [todos, setTodos] = useState([]);
    let [searchTerm, setSearchTerm] = useState('');
    let [todosFilter, setTodosFilter] = useState('all');

    function toggleTodo (id) {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }));
    }

    useEffect(() => {
		const raw = localStorage.getItem('todos') ?? []
		setTodos(JSON.parse(raw))
	}, [])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

    function removeTodo (id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    function importantTodo (id) {
        setTodos(todos.map(todo => {
            if(todo.id === id) {
                todo.important = !todo.important
            }
            return todo
        }));
    }

    function addedTodo (text) {
        setTodos(
            todos.concat([
              {
                name: text,
                completed: false,
                id: Math.random(),
                important: false,
                date: new Date().toLocaleString('ru')
              }
            ])
        );
    }

    function searchTodos (array, term = '') {
		if (term.length === 0) {
			return array
		}
		return array.filter(todo => {
			return todo.name.toLowerCase().indexOf(term.toLowerCase()) > -1
		})
	}

    function filter (items, filter = '') {
        switch(filter) {
            case 'all':
                return items;
            case 'important':
                return items.filter(item => item.important);
            case 'done':
                return items.filter(item => item.completed);
            default:    
                return items;
        }
    }

    function filterTodos (e) {
        setTodosFilter(e.target.innerHTML.toLowerCase());
    }

    const countTodos = todos.length;
    const countDone = todos.filter(todo => todo.completed).length;

    return (
        <div className="container app">
            <AppHeader
                toDo={countTodos}
                done={countDone}
            />
            <Toolbar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onToggle={filterTodos}
                countTodos={countTodos}
                todosFilter={todosFilter}
            />
            <AddTodo
                addedTodo={addedTodo}
            />
            <TodoList
                todos={filter(searchTodos(todos, searchTerm), todosFilter)}
                onToggleDone={toggleTodo}
                onToggleImportant={importantTodo}
                removeTodo={removeTodo}
            />
        </div>
    )
}