import {authTypes} from "./auth.types";

export function setAuthUserDataAC (user) {
    return {
        type: authTypes.LOGIN_USER,
        user
    }
}

export function signOutUserAC () {
    return {
        type: authTypes.LOGOUT_USER
    }
}


// export function loginUser (user) {
//     return {
//         type: authTypes.LOGIN_USER,
//         payload: user
//     }
// }
//
// export function signOutUser (user) {
//     return {
//         type: authTypes.LOGIN_USER,
//         payload: user
//     }
// }