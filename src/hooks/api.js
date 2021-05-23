import {useEffect, useState} from "react";
import * as api from '../api';

const useApi = () => {
    const [lists, setLists] = useState([]);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        api.getLists().then(setLists);
    }, []);

    const getLists = () => {
        return api.getLists().then(setLists);
    }

    const getListTodos = (listId) => {
        return api.getListTodos(listId)
            .then(setTodos)
    }

    const createTodo = (data) => {
        return api.createTodo(data)
            .then(todo => setTodos([...todos, todo]))
    }

    const updateTodo = (todoId, data) => {
        return api.updateTodo(todoId, data)
            .then(data => setTodos([...todos.map(t => t.id !== todoId ? ({...t, ...data, }) : t)]))
    }


    const deleteTodo = (todoId) => {
        return api.deleteTodo(todoId)
            .then(todoId => setTodos([...todos.filter(t => t.id !== todoId)]))
    }

    return {
        data: {
            lists,
            todos
        },
        actions: {
            getLists,
            getListTodos,
            createTodo,
            deleteTodo,
            updateTodo
        }
    };
}

export default useApi;