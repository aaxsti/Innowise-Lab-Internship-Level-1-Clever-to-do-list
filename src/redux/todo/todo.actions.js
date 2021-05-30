import {todoTypes} from "./todo.types";

export function setLists(lists)  {
    return {
        type: todoTypes.SET_LISTS,
        lists
    }
}

export function setTodos(todos) {
    return {
        type: todoTypes.SET_TODOS,
        todos
    }
}

export function setListTodos(todos) {
    return {
        type: todoTypes.SET_LIST_TODOS,
        todos
    }
}

export function createTodoAC(todo) {
    return {
        type: todoTypes.CREATE_TODO,
        todo
    }
}

export function updateTodoAC(todo) {
    return {
        type: todoTypes.UPDATE_TODO,
        todo
    }
}

export function deleteTodoAC(todoId) {
    return {
        type: todoTypes.DELETE_TODO,
        todoId
    }
}