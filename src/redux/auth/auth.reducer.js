import {authTypes} from "./auth.types";

let initialState = {
    user: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case authTypes.LOGIN_USER:
            return {
                ...state,
                user: action.user
            };
        case authTypes.LOGOUT_USER:
            return {
                ...state,
                user: null
            };
        default:
            return state
    }
}