import React from 'react';
import TodoListItem from "../TodoListItem/TodoListItem";
import {List, Typography} from "@material-ui/core";

const TodoList = ({todos, list, onDelete, onUpdate, onSelect}) => {
    return (
        <div>
            <Typography variant="h5" style={{paddingBottom: 15}}>{list.title}</Typography>
            <List>
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