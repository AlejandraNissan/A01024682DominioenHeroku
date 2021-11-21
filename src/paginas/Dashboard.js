import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "../components/Chart";
import Orders from "../components/Orders";
import Deposits from "../components/Deposits";
import { Link } from "react-router-dom";
import Card from "../components/Crad"
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function DashBoard(params) {

  const jsonWithCardStructure = 
  {
    "Usuarios": {
      "T4DlguipL4eFQ6WT1Z9DYz9T2hd2": {
        "recetas": [
          {
            "duracion": "45 min",
            "ingredientes": [
              "pasta",
              "jitomate",
              "cebolla",
              "ajo"
            ],
            "procedimiento": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum, orci quis malesuada suscipit, justo mi sollicitudin erat, nec facilisis arcu ligula id nunc. Integer auctor sem aliquet erat aliquet, quis ultrices nibh consequat. Fusce sed nunc eros. Morbi pulvinar augue eget mi iaculis mollis at eu neque. Nam pharetra aliquet nisl et pellentesque. Cras ac augue diam. Mauris dapibus purus quis facilisis bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "titulo": "Pasta pomodoro"
          }
        ]
      },
      "ATgd8U10n2bE4lmwfjtvNtPmrth2": {
        "recetas": [
          {
            "duracion": "45 min",
            "ingredientes": [
              "pasta",
              "jitomate",
              "cebolla",
              "ajo"
            ],
            "procedimiento": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum, orci quis malesuada suscipit, justo mi sollicitudin erat, nec facilisis arcu ligula id nunc. Integer auctor sem aliquet erat aliquet, quis ultrices nibh consequat. Fusce sed nunc eros. Morbi pulvinar augue eget mi iaculis mollis at eu neque. Nam pharetra aliquet nisl et pellentesque. Cras ac augue diam. Mauris dapibus purus quis facilisis bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "titulo": "Pasta pomodoro"
          },
          {
            "duracion": "50 min",
            "ingredientes": [
              "harina",
              "aceite",
              "jitomate",
              "cebolla",
              "ajo"
            ],
            "procedimiento": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum, orci quis malesuada suscipit, justo mi sollicitudin erat, nec facilisis arcu ligula id nunc. Integer auctor sem aliquet erat aliquet, quis ultrices nibh consequat. Fusce sed nunc eros. Morbi pulvinar augue eget mi iaculis mollis at eu neque. Nam pharetra aliquet nisl et pellentesque. Cras ac augue diam. Mauris dapibus purus quis facilisis bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "titulo": "Pizza de Sandy"
          }
        ]
      },
        "iuUCxTVnodgoW5QXZh3ki1iue9M2": {
        "recetas": [
          {
            "duracion": "45 min",
            "ingredientes": [
              "pasta",
              "jitomate",
              "cebolla",
              "ajo"
            ],
            "procedimiento": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum, orci quis malesuada suscipit, justo mi sollicitudin erat, nec facilisis arcu ligula id nunc. Integer auctor sem aliquet erat aliquet, quis ultrices nibh consequat. Fusce sed nunc eros. Morbi pulvinar augue eget mi iaculis mollis at eu neque. Nam pharetra aliquet nisl et pellentesque. Cras ac augue diam. Mauris dapibus purus quis facilisis bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "titulo": "Pasta pomodoro"
          },
          {
            "duracion": "50 min",
            "ingredientes": [
              "harina",
              "aceite",
              "jitomate",
              "cebolla",
              "ajo"
            ],
            "procedimiento": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum, orci quis malesuada suscipit, justo mi sollicitudin erat, nec facilisis arcu ligula id nunc. Integer auctor sem aliquet erat aliquet, quis ultrices nibh consequat. Fusce sed nunc eros. Morbi pulvinar augue eget mi iaculis mollis at eu neque. Nam pharetra aliquet nisl et pellentesque. Cras ac augue diam. Mauris dapibus purus quis facilisis bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "titulo": "Pizza de Sandy"
          }
        ]
      }
    }
  }

  let auth = getAuth();
  let myUid = auth.currentUser.uid;
  
  console.log(jsonWithCardStructure.Usuarios[myUid]);
  
  let amountOfRecepies = Object.keys(jsonWithCardStructure.Usuarios.iuUCxTVnodgoW5QXZh3ki1iue9M2.recetas).length;
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

        {
          jsonWithCardStructure.Usuarios.iuUCxTVnodgoW5QXZh3ki1iue9M2.recetas.map((index, i)=>(
            <Card
              titulo = {index.titulo}
              duracion = {index.duracion}
              ingredientes = {index.ingredientes}
              procedimiento = {index.procedimiento}
              index = {i}
              uid = {myUid}
              >
            </Card>
          ))}
      </Grid>
    </Container>
  );
}
