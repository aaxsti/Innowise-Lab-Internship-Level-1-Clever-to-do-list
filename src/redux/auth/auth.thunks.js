import {authAPI} from "../../api/auth-api";
import {setAuthUserDataAC, signOutUserAC} from "./auth.actions";
import {onAuth} from "../../api";

export const login = (email, password) =>
    async (dispatch) => {
        try {
            const userData = await authAPI.loginUser(email, password)
            dispatch(setAuthUserDataAC(userData))
        }
        catch (e) {
            console.log(e)
        }

    }

export const signOut = () =>
    async (dispatch) => {
        await authAPI.signOutUser();
        dispatch(signOutUserAC())
    }

export const getAuthUserData = () =>
    async (dispatch) => {
        await onAuth((user) => {
            if (user) {
                dispatch(setAuthUserDataAC(user))
            } else {
                dispatch(signOutUserAC())
            }
        })
    }