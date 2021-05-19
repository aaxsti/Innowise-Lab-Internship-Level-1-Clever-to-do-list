import React, {useContext, useEffect, useState} from 'react';
import s from './TodoList.module.css';
import DBContext from '../../context/db';
import TodoListItem from "../TodoListItem/TodoListItem";
import {CircularProgress, List, Typography} from "@material-ui/core";

const TodoList = ({match}) => {
    const [todos, setTodos] = useState([]);
    const db = useContext(DBContext);

    useEffect(() => {
        db.get('todos')(collection =>
            collection.where('listId', '==', match.params.listId)
        )
            .then(setTodos);
    }, [db, match.params.listId])

    const list = db.lists.find(list => list.id === match.params.listId)

    if (!list) return <div style={{padding: '50px 0 0 50px'}}><CircularProgress size={70} thickness={2.0}/></div>

    return (
        <div className={s.todoList}>
            <Typography variant="h5" className={s.todoListTitle}>{list.title}</Typography>
            <List className={s.todoListItems}>
                {
                    todos.map(todo =>
                        <TodoListItem key={todo.id} todo={todo}/>)
                }
            </List>
        </div>
    )
}

export default TodoList;