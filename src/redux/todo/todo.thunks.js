import {todoAPI} from "../../api/todo-api";
import {createTodoAC, deleteTodoAC, setLists, setListTodos, setTodos, updateTodoAC} from "./todo.actions";

export const requestLists = () =>
    async (dispatch) => {
        let data = await todoAPI.getLists();
        dispatch(setLists(data));
    }

export const requestTodos = () =>
    async (dispatch) => {
        let data = await todoAPI.getTodos();
        dispatch(setTodos(data));
    }

export const requestListTodos = (listId) =>
    async (dispatch) => {
        let data = await todoAPI.getListTodos(listId);
        dispatch(setListTodos(data));
    }

export const createTodo = (todoData) =>
    async (dispatch) => {
        let data = await todoAPI.createTodo(todoData);
        dispatch(createTodoAC(data));
    }

export const updateTodo = (todoId, data) =>
    async (dispatch) => {
        let APIData = await todoAPI.updateTodo(todoId, data);
        dispatch(updateTodoAC(APIData));
    }

export const deleteTodo = (todoId) =>
    async (dispatch) => {
        let data = await todoAPI.deleteTodo(todoId);
        dispatch(deleteTodoAC(data));
    }