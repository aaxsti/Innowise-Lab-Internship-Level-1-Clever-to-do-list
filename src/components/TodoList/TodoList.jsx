import React from 'react';
import TodoListItem from "../TodoListItem/TodoListItem";
import {List} from "@material-ui/core";

const TodoList = ({todos, onDelete, onUpdate, onSelect}) => {
    return (
        <div>
            <List style={{padding: '1rem'}}>
                {
                    todos.map(todo =>
                        <TodoListItem
                            key={todo.id}
                            todo={todo}
                            onDelete={onDelete}
                            onUpdate={onUpdate}
                            onSelect={onSelect}/>)
                }
            </List>
        </div>

    )
}

export default TodoList;