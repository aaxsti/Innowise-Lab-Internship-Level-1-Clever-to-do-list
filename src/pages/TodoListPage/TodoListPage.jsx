import React, {useContext, useEffect, useState} from 'react';
import DataContext from '../../context/data'
import {CircularProgress, Typography} from "@material-ui/core";
import TodoList from "../../components/TodoList/TodoList";
import TodoForm from "../../components/TodoForm/TodoForm";
import TodoDetails from "../../components/TodoDetails/TodoDetails";
import './TodoListPage.scss';
import {Layout} from 'mdc-react';
import {actions} from '../../store';


const TodoListPage = ({match}) => {
    const {state, dispatch} = useContext(DataContext)
    const [selectedTodo, setSelectedTodo] = useState(null);

    useEffect(async () => {
        if (match.params.listId) {
            await actions.getListTodos(match.params.listId, dispatch)
        } else {
            await actions.getTodos(dispatch);
        }
    }, [dispatch, match.params.listId])

    const handleSubmit = async (title) => {
        await actions.createTodo({
            title,
            listId: list.id
        }, dispatch)
    }

    const handleDelete = async (todoId) => {
        await actions.deleteTodo(todoId, dispatch);
    }

    const handleUpdate = async (todoId, data) => {
        await actions.updateTodo(todoId, data, dispatch);
    }

    const handleSelect = async (todo) => {
        setSelectedTodo(todo);
    }

    const list = state.lists.find(list => list.id === match.params.listId)

    if (!list || !state.todos) return (
        <div style={{padding: '50px 0 0 50px'}}>
            <CircularProgress size={70} thickness={2.0}/>
        </div>)

    return (
        <div>
            <Typography variant="h5" id="todo-list-title">{list.title}</Typography>
            <Layout id='todo-list-page' className="page" row>
                <Layout>
                    <TodoList
                        todos={state.todos}
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
        </div>
    )
}

export default TodoListPage;