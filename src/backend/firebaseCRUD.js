import getFirebase from "../firebase/firebaseconfiguration";
import { getAuth } from "firebase/auth";
import { 
    doc,
    getFirestore, collection, getDocs,
    addDoc,
    deleteDoc
} from "firebase/firestore";

getFirebase();
const auth = getAuth();
const db = getFirestore();
const collectionRef = collection(db, 'Recipes')

function CreateRecipe(props) {
    const user = auth.currentUser.uid;
    addDoc(collectionRef, {
        titulo:         props.titulo,
        ingredientes:   props.ingredientes,
        procedimiento:  props.procedimiento,
        duracion:       props.duracion,
        uid:            user

    });
    return(<br/>);
}

async function DeleteRecipe(props) {
    console.log("Recipe ID: ", props.rid);
    await deleteDoc(doc(db, 'Recipes', props.rid));
    return(<br/>);
}

export {CreateRecipe, DeleteRecipe};
