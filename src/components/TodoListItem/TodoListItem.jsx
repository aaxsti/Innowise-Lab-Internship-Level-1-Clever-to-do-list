import React from 'react';
import {Checkbox, Icon, IconButton, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

const TodoListItem = ({todo, onDelete, onUpdate, onSelect}) => {
    const handleChange = (completed) => {
        onUpdate(todo.id, {completed: completed.target.checked})
    }

    return (
        <ListItem button divider style={{backgroundColor: 'white', borderRadius: 5}}>
            <ListItemIcon>
                <Checkbox
                    color="primary"
                    checked={todo.completed}
                    onChange={handleChange}/>
            </ListItemIcon>

            <ListItemText onClick={() => onSelect(todo)}>{todo.title}</ListItemText>

            <IconButton onClick={() => onDelete(todo.id)}>
                <Icon><DeleteIcon/></Icon>
            </IconButton>
        </ListItem>
    )
}

export default TodoListItem;