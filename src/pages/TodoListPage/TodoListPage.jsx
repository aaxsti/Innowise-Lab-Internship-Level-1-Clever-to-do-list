import React, {useEffect, useState} from 'react';
import {Typography} from "@material-ui/core";
import TodoList from "../../components/TodoList/TodoList";
import TodoForm from "../../components/TodoForm/TodoForm";
import TodoDetails from "../../components/TodoDetails/TodoDetails";
import {useDispatch, useSelector} from "react-redux";
import {ListSelector, TodoSelector} from "../../redux/todo/todo.selectors";
import {createTodo, deleteTodo, requestListTodos, requestTodos, updateTodo} from "../../redux/todo/todo.thunks";
import styled from "styled-components";
import Spinner from "../../components/common/Spinner";

const TodoListWrapper = styled.div`
  max-width: 100%;
  display: flex;
`

const TodoListWrapperLayout = styled.div`
  flex: 1;
`

const TodoTitleWrapper = styled(Typography)`
  padding: 14px;
  background-color: #afc0d4;
`

const TodoListPage = ({match}) => {
    const [selectedTodo, setSelectedTodo] = useState(null);
    const dispatch = useDispatch()

    const lists = useSelector(ListSelector)
    const todos = useSelector(TodoSelector)

    useEffect(() => {
        setSelectedTodo(null);

        if (match.params.listId) {
            dispatch(requestListTodos(match.params.listId));
        } else {
            dispatch(requestTodos());
        }

    }, [dispatch, match.params.listId])

    const handleSubmit = (title) => {
        dispatch(createTodo({
            title,
            listId: list.id
        }))
    }

    const handleDelete = (todoId) => {
        dispatch(deleteTodo(todoId));
    }

    const handleUpdate =(todoId, data) => {
        dispatch(updateTodo(todoId, data));
    }

    const handleSelect = (todo) => {
        setSelectedTodo(todo);
    }

    const list = lists.find(list => list.id === match.params.listId)

    if (!list || !todos) return <Spinner/>

    return (
        <div>
            <TodoTitleWrapper variant="h5">{list.title}</TodoTitleWrapper>
            <TodoListWrapper>
                <TodoListWrapperLayout>
                    <TodoList
                        todos={todos}
                        list={list}
                        onSelect={handleSelect}
                        onDelete={handleDelete}
                        onUpdate={handleUpdate}/>

                    <TodoForm
                        className="todo-form"
                        onSubmit={handleSubmit}/>
                </TodoListWrapperLayout>

                {selectedTodo &&
                <TodoDetails
                    todo={selectedTodo}
                    onClose={() => setSelectedTodo(null)}/>
                }
            </TodoListWrapper>
        </div>
    )
}

export default TodoListPage;