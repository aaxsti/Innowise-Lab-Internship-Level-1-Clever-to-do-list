import {db} from "./firebase";

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

export function getListTodos(listId) {
    return db.collection('todos')
        .where('listId', '==', listId)
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
    return db.collection('todos').doc(todoId).update(data)
        .then(res => console.log(res));
}

export function deleteTodo(todoId) {
    return db.collection("todos")
        .doc(todoId)
        .delete()
        .then(() => todoId);
}