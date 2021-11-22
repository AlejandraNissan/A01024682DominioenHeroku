import * as React from "react";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';
import {CreateRecipe, DeleteRecipe} from "../backend/firebaseCRUD"

export default function DashBoard(params) {
  return (
    <Container maxWidth="lg" sx={{ mt: 15 }}>
        <h1>Create a Recipe</h1>
        <form class='add'>
            <label for="titulo">Titulo: </label>  
            <input type="text" name="Titulo" id="Titulo" required></input>
            <br/>
            <br/>

            <label for="ingredientes">Ingredientes: </label>  
            <input type="text" name="Ingredientes" id="Ingredientes" required></input>
            <br/>
            <br/>

            <label for="procedimiento">Procedimiento: </label>  
            <input type="text" name="Procedimiento" id="Procedimiento" required></input>
            <br/>
            <br/>

            <label for="duracion">Duracion: </label>  
            <input type="text" name="Duracion" id="Duracion" required></input>
            <br/>
            <br/>

            <Button color="primary" onClick={() => { 
                CreateRecipe({
                    titulo:document.getElementById("Titulo").value,
                    ingredientes:document.getElementById("Ingredientes").value,
                    procedimiento:document.getElementById("Procedimiento").value,
                    duracion:document.getElementById("Duracion").value
                }); 
                console.log('POST successful.'); }}>
            Primary
            </Button>
        </form>

        <h1>Delete a Recipe</h1>
        <form class='delete'>
            <label for="id">Titulo: </label>  
            <input type="text" name="RecipeId" id="RecipeId" required></input>
            <br/>
            <br/>

            <Button color="primary" onClick={() => { 
                DeleteRecipe({
                    rid:document.getElementById("RecipeId").value,
                }); 
                console.log('DELETE successful.'); }}>
            Delete
            </Button>
        </form>
    </Container>
  );
}
