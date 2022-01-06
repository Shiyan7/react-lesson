import React from 'react';
import { TabsBtn } from '../TabsBtn/TabsBtn';

export const Tabs = ({onToggle, countTodos, todosFilter}) => {

    const btns = [
        {name: 'All', id: 1},
        {name: 'Important', id: 2},
        {name: 'Done', id: 3},
    ]

    return (
        <TabsBtn
            btns={btns}
            onClick={onToggle}
            countTodos={countTodos}
            todosFilter={todosFilter}
        />
    )
}