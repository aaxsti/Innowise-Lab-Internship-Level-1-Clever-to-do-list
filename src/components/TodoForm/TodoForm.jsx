import React, {useState} from 'react';
import {List, TextField} from "@material-ui/core";

const TodoForm = ({onSubmit}) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        onSubmit(title);
        setTitle('');
    }

    return (
        <form style={{ padding: '0 1rem 0'}} onSubmit={handleSubmit}>
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