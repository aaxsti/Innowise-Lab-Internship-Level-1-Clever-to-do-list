import React, {useEffect, useState} from 'react';
import useApi from '../hooks/api';
import {CircularProgress} from "@material-ui/core";
import TodoList from "../components/TodoList/TodoList";
import TodoForm from "../components/TodoForm/TodoForm";
import TodoDetails from "../components/TodoDetails/TodoDetails";
import './TodoList.scss';
import {Layout} from 'mdc-react';

const TodoListPage = ({match}) => {
    const [selectedTodo, setSelectedTodo] = useState(null);
    const {data: {lists, todos}, actions} = useApi();

    useEffect(async () => {
        await actions.getListTodos(match.params.listId)
    }, [actions, match.params.listId])

    const handleSubmit = async (title) => {
        await actions.createTodo({
            title,
            listId: list.id
        })
    }

    const handleDelete = async (todoId) => {
        await actions.deleteTodo(todoId);
    }

    const handleUpdate = async (todoId, data) => {
        await actions.updateTodo(todoId, data);
    }

    const handleSelect = async (todo) => {
        setSelectedTodo(todo);
    }

    const list = lists.find(list => list.id === match.params.listId)

    if (!list || !todos) return <div style={{padding: '50px 0 0 50px'}}><CircularProgress size={70} thickness={2.0}/>
    </div>

    return (
        <Layout id='todo-list-page' className="page" row>
            <Layout>
                <TodoList
                    todos={todos}
                    list={list}
                    onSelect={handleSelect}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}/>

                <TodoForm
                    className="todo-form"
                    onSubmit={handleSubmit}/>
            </Layout>
                {selectedTodo &&
                <TodoDetails
                    todo={selectedTodo}
                    onClose={() => setSelectedTodo(null)}/>
                }
        </Layout>
    )
}

export default TodoListPage;