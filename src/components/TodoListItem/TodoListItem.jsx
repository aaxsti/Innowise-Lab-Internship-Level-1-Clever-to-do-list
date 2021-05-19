import React from 'react';
import {Checkbox, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

const TodoListItem = ({todo, onCompleteChange}) => {
    return (
        <ListItem button>
            <ListItemIcon>
                <Checkbox
                    color="primary"
                checked={todo.completed}
                onChange={onCompleteChange}/>
            </ListItemIcon>

            <ListItemText>{todo.title}</ListItemText>
        </ListItem>
    )
}

export default TodoListItem;