import {auth} from "../firebase";

export const authAPI = {
    loginUser(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
            .then((data) => {
                console.log('USER LOGGED IN')
                return data
            })
    },

    signOutUser() {
        return auth.signOut();
    },

    registerUser(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
            .then((data) => {
                console.log('USER HAS CREATED')
                return data
            })
    },

    onAuth(handleAuth) {
        auth.onAuthStateChanged(handleAuth);
    }
}

