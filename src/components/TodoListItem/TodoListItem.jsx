import React from 'react';
import {Checkbox, Icon, IconButton, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import styled from "styled-components";

const ListItemWrapper = styled(ListItem)`
  background-color: white;
  border-radius: 5px;
`

const TodoListItem = ({todo, onDelete, onUpdate, onSelect}) => {

    const handleChange = (completed) => {
        onUpdate(todo.id, {completed: completed.target.checked})
    }

    return (
        <ListItemWrapper button divider>
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
        </ListItemWrapper>
    )
}

export default TodoListItem;