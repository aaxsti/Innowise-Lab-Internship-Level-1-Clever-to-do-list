import {db, auth} from "./firebase";

export function loginUser(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
        .then(() => console.log('USER LOGGED IN'))
        .catch((error) => {
            console.log(error)
        });
}

export function getLists() {
    return db.collection('lists')
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        })
        .catch(error => {
            console.log("Error getting documents: ", error);
        });
}

export function getTodos() {
    return db.collection('todos')
        .where('listId', '==', '')
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
        });
}

export function getListTodos(listId) {
    return db.collection('todos')
        .where('listId', '==', listId)
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }))
        })
        .catch(error => {
            console.log("Error getting documents: ", error);
        });
}

export function createTodo(data) {
    return db.collection("todos").add({
        ...data,
        completed: false
    })
        .then(docRef => docRef.get())
        .then(doc => ({
            id: doc.id,
            ...doc.data()
        }))
}

export function updateTodo(todoId, data) {
    console.log(data)
    return db.collection('todos').doc(todoId).update(data)
        .then(() => ({
            id: todoId,
            ...data
        }))
}

export function deleteTodo(todoId) {
    return db.collection("todos")
        .doc(todoId)
        .delete()
        .then(() => todoId);
}

export function onAuth(handleAuth) {
    auth.onAuthStateChanged(handleAuth);
}