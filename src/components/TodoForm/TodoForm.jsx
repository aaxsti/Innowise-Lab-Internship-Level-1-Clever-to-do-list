import React, {useState} from 'react';
import {List, TextField} from "@material-ui/core";
import styled from "styled-components";

const TodoListForm = styled.form`
  padding: 0 1rem 0;
`


const TodoForm = ({onSubmit}) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(title);
        setTitle('');
    }

    return (
        <TodoListForm onSubmit={handleSubmit}>
            <List>
                <TextField
                    placeholder='Новая задача...'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    variant="outlined"
                    fullWidth
                />
            </List>
        </TodoListForm>
    );
}

export default TodoForm;