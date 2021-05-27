import React from 'react';
import './TodoDetails.scss'
import {Checkbox, Icon, IconButton, List, ListItem, ListItemText, TextField, Typography} from "@material-ui/core";
import {Layout} from 'mdc-react';
import CloseIcon from '@material-ui/icons/Close';
import Divider from "@material-ui/core/Divider";

const TodoDetails = ({todo, onClose}) => {
    return (
        <aside className="todo-details">
            <Layout>
                <Typography variant={"h6"} className="todo-title">
                    Детали задачи
                    <IconButton onClick={onClose}>
                        <Icon><CloseIcon/></Icon>
                    </IconButton>
                </Typography>
            </Layout>
            <Divider/>
            <Layout className="todo-form-elements">
                <TextField
                    value={todo.title}
                    onChange={() => {
                    }}/>
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
