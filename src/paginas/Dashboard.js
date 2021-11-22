import * as React from "react";
import Container from "@mui/material/Container";

import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "../components/Chart";
import Orders from "../components/Orders";
import Deposits from "../components/Deposits";
import { Link } from "react-router-dom";
import Card from "../components/Crad"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import {GetUserRecipes, CreateRecipe, DeleteRecipe} from "../backend/firebaseCRUD"

export default function DashBoard(params) {

  const jsonWithCardStructure = 
  {
  "Recipes": [
          {
              "duracion": "45 min",
              "ingredientes": ["flores", "muchos colores"],
              "procedimiento": "Nel prro",
              "titulo": "Pizza de Sandy",
              "id": "IVMAg8NmhY56cQLMPXcn"
          },
          {
              "duracion": "1 h",
              "ingredientes": ["flores", "muchos colores"],
              "procedimiento": "Nel prro",
              "titulo": "Pizza de Sandy",
              "id": "IVMAg8NmhY56cQLMPXcn"
          }
    ]
  }

  let auth = getAuth();
  let myUid = auth.currentUser.uid;
  //let myRecipes = GetRecipes();
  //let recetas = { "Recipes": myRecipes};
  console.log("Estoy en dashboard, probando");
  //console.log(myRecipes);

  // console.log(jsonWithCardStructure.Usuarios[myUid]);

  // let amountOfRecepies = Object.keys(jsonWithCardStructure.Usuarios.iuUCxTVnodgoW5QXZh3ki1iue9M2.recetas).length;
  return (
    <Container maxWidth="lg" sx={{ mt: 15 }}>
      <Grid container spacing={3}>
        <div>
          <ul>
            <li>
              <Link to="/logout">logout</Link>
            </li>
          </ul>
        </div>
        <GetUserRecipes uid = {myUid}/>
        {/* {
          jsonWithCardStructure.Recipes.map((index, i)=>(
            <Card
              titulo = {index.titulo}
              duracion = {index.duracion}
              ingredientes = {index.ingredientes}
              procedimiento = {index.procedimiento}
              index = {i}
              cardId = {index.id}
              uid = {myUid}
              >
            </Card>
          ))} */}
      </Grid>
    </Container>
  );
}
