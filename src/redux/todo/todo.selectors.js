import { createSelector } from 'reselect'

const todo = state => state.mainTodo

export const ListSelector = createSelector(
    [todo],
    todo => todo.lists
)

export const TodoSelector = createSelector(
    [todo],
    todo => todo.todos
)