import React from 'react';
import {Icon, IconButton, List, ListItem, ListItemText, TextField, Typography} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import Divider from "@material-ui/core/Divider";
import styled from "styled-components";

const TodoDetailsWrapper = styled.aside`
  flex-basis: 300px;
  background-color: #ffffff;
  border-left: 1px rgba(0, 0, 0, 0.12) solid;
  border-top: 1px rgba(0, 0, 0, 0.12) solid;
`

const TodoDetailsBlocks = styled.div`
  padding: 20px; 
`

const TodoDetails = ({todo, onClose}) => {

    // const handleKeyPush = (e) => {
    //     if (e.keyCode === 27) {
    //         console.log('escape pushed')
    //         onClose();
    //     }
    // }

    return (
        <TodoDetailsWrapper>
            <TodoDetailsBlocks>
                <Typography variant={"h6"}>
                    Детали задачи
                    <IconButton onClick={onClose}>
                        <Icon><CloseIcon/></Icon>
                    </IconButton>
                </Typography>
            </TodoDetailsBlocks>
            <Divider/>
            <TodoDetailsBlocks>
                <TextField
                    label="Название"
                    value={todo.title}
                    onChange={() => {
                    }}/>
                {todo.steps && todo.steps.length > 0 &&
                <List>
                    <ListItemText>
                         Шаги
                    </ListItemText>
                    {todo.steps.map((step, index) =>
                        <ListItem key={index}>
                            <ListItemText>
                                {step}
                            </ListItemText>
                        </ListItem>)}
                </List>
                }
            </TodoDetailsBlocks>
        </TodoDetailsWrapper>
    );
}

export default TodoDetails;
