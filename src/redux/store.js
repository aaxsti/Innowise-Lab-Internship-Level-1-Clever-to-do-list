import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {todoReducer} from "./todo/todo.reducer";
import {authReducer} from './auth/auth.reducer';

let rootReducer = combineReducers({
    auth: authReducer,
    mainTodo: todoReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;