import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@material-ui/core/Box';

export default function MultiActionAreaCard(props) {

    console.log(props.uid);

  return (
    <Box m={2} pt={3}>
        <Card sx={{ maxWidth: 345}}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image="https://picsum.photos/200"
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.titulo}
            </Typography>
            <Typography gutterBottom variant="h10" component="div">
                Duración: {props.duracion}
            </Typography>          
            <Typography variant="body2" color="text.secondary">
                Ingredientes: {props.ingredientes.join(', ')}
            </Typography>
            <Typography variant="body3" color="text.secondary">
                Procedimiento:
                {props.procedimiento}
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
    </Box>
  );
}