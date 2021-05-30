import {todoTypes} from "./todo.types";

let initialState = {
    todos: [],
    lists: [],
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case todoTypes.SET_LISTS:
            return {
                ...state,
                lists: action.lists
            };
        case todoTypes.SET_TODOS:
            return {
                ...state,
                todos: action.todos
            };
        case todoTypes.SET_LIST_TODOS:
            return {
                ...state,
                todos: action.todos
            }
        case todoTypes.CREATE_TODO:
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            }
        case todoTypes.UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.todo.id) {
                        return {
                            ...todo,
                            ...action.todo
                        }
                    }
                    return todo
                })
            }
        case todoTypes.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.todoId)
            }
        default:
            return state
    }
}