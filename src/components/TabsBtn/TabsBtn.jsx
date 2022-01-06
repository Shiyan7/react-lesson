import React from "react";
import "./TabsBtn.scss";

export const TabsBtn = ({btns, onClick, countTodos, todosFilter}) => {

    return (
        btns.map(btn => {

            const isActive = todosFilter === btn.name.toLowerCase();
            const cls = isActive ? 'tabs-btn btn-dark' : 'tabs-btn btn-outline-secondary';

            return (
                <button
                    type="button"
                    className={`btn ${cls} `}
                    key={btn.id}
                    onClick={onClick}
                    disabled={!countTodos}
                >
                {btn.name}
                </button>
            )
        })
    )

};