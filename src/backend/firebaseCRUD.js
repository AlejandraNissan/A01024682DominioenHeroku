import getFirebase from "../firebase/firebaseconfiguration";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebase = getFirebase();
const auth = getAuth();
const db = getFirestore();
const collectionRef = collection(db, 'Recipes')

export default function getRecipes() {
    const user = auth.currentUser.uid;
    console.log(user);
    console.log(collectionRef);
    getDocs(collectionRef)
        .then((snapshot) => {
            let recipes = [];
            snapshot.docs.forEach((doc) => {
                recipes.push({...doc.data(), id: doc.id});
            })
            console.log(recipes);
        })
        .catch(err => {
            console.log(err.message);
        })

    return(<br/>);
}

