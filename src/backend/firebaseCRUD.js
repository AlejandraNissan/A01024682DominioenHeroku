import getFirebase from "../firebase/firebaseconfiguration";
import { 
    getFirestore,
    collection, 
    getDocs, 
    getDoc, 
    doc,
    updateDoc
} from "firebase/firestore";

getFirebase();
const db = getFirestore();

function GetRecipes() { 
    const collectionRef = collection(db, 'Recipes');
    getDocs(collectionRef)
        .then((snapshot) => {
            let recipes = [];
            snapshot.docs.forEach((docu) => {
                recipes.push({...docu.data(), id: docu.id});
            })
            console.log(recipes);
        })
        .catch(err => {
            console.log(err.message);
        })

    return(<br/>);
}

function GetRecipe(props) {
    const recipeId = props.recipeId;
    const docRef = doc(db, 'Recipes', recipeId);
    getDoc(docRef)
    .then((snapshot) => {
        console.log(snapshot.data());
    })
    .catch(err => {
        console.log(err.message);
    })

    return(<br/>);
}

function UpdateRecipe(props) {
    const recipeId = props.recipeId;
    const data = props.data
    const docRef = doc(db, 'Recipes', recipeId);
    updateDoc(docRef, {data})
    .then(() => {
        console.log("Record Updated")
    })
}

export { GetRecipes, GetRecipe };
