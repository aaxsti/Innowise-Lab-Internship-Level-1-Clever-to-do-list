import {db} from "./firebase";

export function get(collectionName) {
    const collection = db.collection(collectionName);

    return (query = () => collection) => {
        return query(collection)
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
}