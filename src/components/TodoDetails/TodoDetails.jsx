import React from 'react';
import './TodoDetails.scss'
import {Checkbox, Icon, IconButton, List, ListItem, ListItemText, TextField, Typography} from "@material-ui/core";
import {Layout} from 'mdc-react';
import CloseIcon from '@material-ui/icons/Close';

const TodoDetails = ({todo, onClose}) => {
    return (
        <aside className="todo-details">
            <Layout row justifyContent={"between"}>
                <Typography variant={"h5"}>
                    Детали задачи
                    <IconButton onClick={onClose}>
                        <Icon><CloseIcon/></Icon>
                    </IconButton>
                </Typography>


            </Layout>
            <Layout>
                <Layout row>
                    <Checkbox
                        checked={todo.completed}
                        onChanhe={() => {
                        }}/>
                    <TextField
                        value={todo.title}
                        onChange={() => {
                        }}
                        fullWidth/>
                </Layout>
                {todo.steps && todo.steps.length > 0 &&
                    <List>
                        {todo.steps.map((step, index) =>
                            <ListItem key={index}>
                                <ListItemText>
                                    {step}
                                </ListItemText>
                            </ListItem>)}
                    </List>
                }
            </Layout>
        </aside>
    );
}

export default TodoDetails;
