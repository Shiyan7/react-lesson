/* Import react, and hook useState */
import React, { useState } from "react";
/* Import styles for this component */
import "./AddTodo.scss";
/* Import component SearchInput */
import { SearchInput } from "../SearchInput/SearchInput";

/* Init func AddTodo and export his */

export const AddTodo = ({addedTodo}) => {

    /* Init variable todoTitle and func setTodoTitle */

    const [todoTitle, setTodoTitle] = useState('');

    /* Init func submitForm */

    const submitForm = (e) => {
        /* e.preventDefault(); for form add-todo__form */
        e.preventDefault();

        /* Delete spaces in value input */

        if(todoTitle.trim()) {
            /* export value todoTitle */
			addedTodo(todoTitle);
            /* Clear value in input */ 
			setTodoTitle('');
		}
    }

    /* standard return in react components: */

    return (
        <div className="add-todo">
            <h2 className="add-todo__title" >Добавьте новое дело</h2>
            <form className="add-todo__form" onSubmit={ submitForm }>
                <SearchInput
                    className="search-input add-todo__input"
                    placeholder="Добавить туду"
                    /* if user write anybody in input, we call func setTodoTitle (useState) and give it its meaning */
                    onChange={(e) => setTodoTitle(e.target.value)}
                    /* Value todoTitle */
                    value={ todoTitle }
                />
                <button
                    className="btn btn-dark add-todo__btn"
                >
                <i className="fas fa-plus"></i>
                </button>
            </form>
        </div>
    )
};