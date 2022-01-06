import React from "react";
import "./AppHeader.scss";

export const AppHeader = ({toDo, done, importants}) => {
    return (
        <div className="d-flex flex-column align-items-center mb-3">
            <h1 className="g-title mb-3">Список дел</h1>
            <h2 className="g-subtitle">
                Всего 
                <span className="number">{toDo}</span>,
                выполненых
                <span className="number">{done}</span>
            </h2>
        </div>
    )
};