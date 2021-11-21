import getFirebase from "../firebase/firebaseconfiguration";
import { getAuth } from "firebase/auth";
import { 
    getFirestore,
    collection, 
    getDocs, 
    getDoc, 
    doc
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

export { GetRecipes, GetRecipe };
