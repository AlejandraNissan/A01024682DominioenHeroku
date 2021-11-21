import getFirebase from "../firebase/firebaseconfiguration";
import { getAuth } from "firebase/auth";
import { 
    getFirestore, collection, getDocs,
    addDoc
} from "firebase/firestore";

getFirebase();
const auth = getAuth();
const db = getFirestore();
const collectionRef = collection(db, 'Recipes')

function CreateRecipe(props) {
    const user = auth.currentUser.uid;
        addDoc(collectionRef, {
            titulo:         props.titulo,
            // ingredientes:   [1,2,3],
            procedimiento:  props.procedimiento,
            duracion:       props.duracion,
            uid:            user

        });
    return(<br/>);
}

export {CreateRecipe};
