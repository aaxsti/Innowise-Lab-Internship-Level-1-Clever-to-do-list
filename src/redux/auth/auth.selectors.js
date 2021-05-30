import { createSelector } from 'reselect'

const user = state => state.auth

export const UserSelector = createSelector(
    [user],
    user => user.user
)