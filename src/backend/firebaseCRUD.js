import getFirebase from "../firebase/firebaseconfiguration";

import { 
    getDocs,
    deleteDoc,
    getFirestore,
    collection, 
    getDocs, 
    getDoc, 
    doc,
    updateDoc,
    query,
    where
} from "firebase/firestore";
import { convertCompilerOptionsFromJson } from "typescript";
import { useState, useEffect } from "react";
import Card from "../components/Crad"
import { getAuth, onAuthStateChanged } from "firebase/auth";

getFirebase();
const auth = getAuth();
const db = getFirestore();
const collectionRef = collection(db, 'Recipes')


function GetRecipes(){
    const [recipe, setRecipes] = useState([]);

    useEffect(() => {
        const GetAll = async () => {
            const collectionRef = collection(db, 'Recipes');
            getDocs(collectionRef)
                .then((snapshot) => {
                    let recipes = [];
                    snapshot.docs.forEach((docu) => {
                        recipes.push({...docu.data(), id: docu.id});
                    })
                    console.log(recipes);
                    setRecipes(recipes);
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    
        GetAll();
    }, []);

    return (
    recipe.map((index, i)=>(
        <Card
          titulo = {index.titulo}
          duracion = {index.duracion}
          ingredientes = {index.ingredientes}
          procedimiento = {index.procedimiento}
          index = {i}
          cardId = {index.id}
          uid = {"123"}
          >
        </Card>)));
}

function GetUserRecipes(props){
    const [recipe, setRecipes] = useState([]);

    useEffect(() => {
        const GetAll = async () => {
            const collectionRef = collection(db, 'Recipes');
            const q = query(collectionRef, where("uid", "==", props.uid));
            getDocs(q)
                .then((snapshot) => {
                    let recipes = [];
                    snapshot.docs.forEach((docu) => {
                        recipes.push({...docu.data(), id: docu.id});
                    })
                    console.log(recipes);
                    setRecipes(recipes);
                })
                .catch(err => {
                    console.log(err.message);
                })
        }
    
        GetAll();
    }, []);

    return (
    recipe.map((index, i)=>(
        <Card
          titulo = {index.titulo}
          duracion = {index.duracion}
          ingredientes = {index.ingredientes}
          procedimiento = {index.procedimiento}
          index = {i}
          cardId = {index.id}
          uid = {"123"}
          >
        </Card>)));
}

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

    });
    return(<br/>);
}

async function DeleteRecipe(props) {
    console.log("Recipe ID: ", props.rid);
    await deleteDoc(doc(db, 'Recipes', props.rid));
    return(<br/>);
}

export {CreateRecipe, DeleteRecipe, GetRecipes, GetUserRecipes, GetRecipe, UpdateRecipe};
