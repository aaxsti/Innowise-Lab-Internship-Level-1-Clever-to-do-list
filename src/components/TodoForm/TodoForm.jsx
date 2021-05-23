import React, {useState} from 'react';
import {Button, List, TextField} from "@material-ui/core";

const TodoForm = ({onSubmit}) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(title);
        setTitle('');
    }

    return (
        <form style={{marginTop: 4}} onSubmit={handleSubmit}>
            <List>
                <TextField
                    placeholder='Новая задача...'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    variant="outlined"
                    fullWidth
                />
            </List>
        </form>
    );
}

export default TodoForm;