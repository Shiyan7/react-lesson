import React from "react";
import { SearchInput } from "../SearchInput/SearchInput";
import { Tabs } from "../Tabs/Tabs";
import "./Toolbar.scss";

export const Toolbar = ({searchTerm, setSearchTerm, onToggle, countTodos, todosFilter}) => {
    return (
        <div className="toolbar">
            <SearchInput
                className="search-input"
                placeholder="Поиск"
                onChange={e => setSearchTerm(e.target.value)}
                value={searchTerm} 
            />
            <Tabs
                onToggle={onToggle}
                countTodos={countTodos}
                todosFilter={todosFilter}
            />
        </div>
    )
}