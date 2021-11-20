import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard(props) {

    const pruebaJson={
        "duracion" : "45 min",
        "ingredientes" : [
            "pasta",
            "jitomate",
            "cebolla",
            "ajo"
        ],
        "procedimiento" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rutrum, orci quis malesuada suscipit, justo mi sollicitudin erat, nec facilisis arcu ligula id nunc. Integer auctor sem aliquet erat aliquet, quis ultrices nibh consequat. Fusce sed nunc eros. Morbi pulvinar augue eget mi iaculis mollis at eu neque. Nam pharetra aliquet nisl et pellentesque. Cras ac augue diam. Mauris dapibus purus quis facilisis bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "titulo" : "Pasta pomodoro"
      }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://picsum.photos/200"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pruebaJson.titulo}
          </Typography>
          <Typography gutterBottom variant="h10" component="div">
            Duración: {pruebaJson.duracion}
          </Typography>          
          <Typography variant="body2" color="text.secondary">
            Ingredientes: {pruebaJson.ingredientes}
          </Typography>
          <Typography variant="body3" color="text.secondary">
            Procedimiento:
            {pruebaJson.procedimiento}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
