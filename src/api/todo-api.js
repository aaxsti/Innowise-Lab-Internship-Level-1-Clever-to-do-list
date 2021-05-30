import {db} from "../firebase";

export const todoAPI = {
    getLists() {
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
    },

    getTodos() {
        return db.collection('todos')
            .where('listId', '==', '')
            .get()
            .then(snapshot => {
                return snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
            });
    },

    getListTodos(listId) {
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
    },

    createTodo(data) {
        return db.collection("todos").add({
            ...data,
            completed: false
        })
            .then(docRef => docRef.get())
            .then(doc => ({
                id: doc.id,
                ...doc.data()
            }))
    },

    updateTodo(todoId, data) {
        return db.collection('todos').doc(todoId).update(data)
            .then(() => ({
                id: todoId,
                ...data
            }))
    },

    deleteTodo(todoId) {
        return db.collection("todos")
            .doc(todoId)
            .delete()
            .then(() => todoId);
    }
};


