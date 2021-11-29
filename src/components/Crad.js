import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@material-ui/core/Box';
import { DeleteRecipe, UpdateRecipe } from '../backend/firebaseCRUD';
import { Link } from "react-router-dom";
import { Grid, TextField, FormControl, Pagination, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { useState, useEffect } from "react";
import { isPrivateIdentifier } from 'typescript';

export default function MultiActionAreaCard(props) {
    const [ editDialog, setEditDialog ] = useState(false);
    const [ productId, setId ] = useState('');
    const [ productDuracion, setDuracion ] = useState('');
    const [ productIngredientes, setIngredientes ] = useState('');
    const [ productProcedimiento, setProcedimiento ] = useState('');
    const [ productTitulo, setTitulo ] = useState('');
    const [ productUid, setUid ] = useState('');

    console.log(props.uid);
    const openEditDialog = (product) => {
        console.log(product);
        setProductToEdit(product);
        setEditDialog(true);
    }

    const closeEditDialog = () => {
        setEditDialog(false);
        //let newRecipe = {"duracion": {productDuracion}, "ingredientes": {productIngredientes}, "procedimiento": {productProcedimiento}, "titulo": {productTitulo}, "uid": {productUid}};
        let cardId = productId;
        console.log("CRAD JAJA", cardId);
        console.log("Llego al close");
        console.log("DURACION: ", productDuracion);
        let duracionV = productDuracion;
        let ingredientesV = productIngredientes;
        let procedimientoV = productProcedimiento;
        let tituloV = productTitulo;

        console.log(duracionV);
        UpdateRecipe({duracion: duracionV, ingredientes: ingredientesV, procedimiento: procedimientoV, titulo: tituloV, card: cardId}).then(()=>{location.assign("/")});
        console.log("Llego aqui"); 
          
    }

    const setProductToEdit = (product) => {
        setId(props.cardId);
        setDuracion(props.duracion);
        setIngredientes(props.ingredientes);
        setProcedimiento(props.procedimiento);
        setTitulo(props.titulo);
        setUid(props.uid);
    }

  return (
    <Box m={2} pt={3}>
        <Card sx={{ maxWidth: 345}}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            width="100"
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
                Ingredientes: {props.ingredientes}
            </Typography>
            <Typography variant="body3" color="text.secondary">
                Procedimiento:
                {props.procedimiento}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <IconButton color="primary" onClick={() => openEditDialog({dir:props.dir}, {rid:props.cardId}, {uid: props.uid})}>
                    Edit
            </IconButton>            
            <Button size="small" color="primary" onClick={() => { 
                // TODO: Make refresh method to remove cards from frontend
                console.log(props.cardId);
                DeleteRecipe({rid:props.cardId}).then(()=>{location.assign("/")});
            }} >
            Delete
            </Button>
        </CardActions>
        <Dialog open={editDialog} onClose={closeEditDialog}>
                                <DialogTitle>Editar Receta</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        <FormControl>
                                            <TextField id="product-name" label="Titulo" value=  {"Titulo", productTitulo}onChange={(e) => setTitulo(e.target.value)} />
                                        </FormControl>
                                    </DialogContentText>
                                    <DialogContentText>
                                        <FormControl>
                                            <TextField id="product-name" label="Duración" value=  {"Duracion", productDuracion}onChange={(e) => setDuracion(e.target.value)} />
                                        </FormControl>
                                    </DialogContentText>
                                    <DialogContentText>
                                        <FormControl>
                                            <TextField id="product-name" label="Ingredientes" value=  {"Ingredientes", productIngredientes}onChange={(e) => setIngredientes(e.target.value)} />
                                        </FormControl>
                                    </DialogContentText>
                                    <DialogContentText>
                                        <FormControl>
                                            <TextField id="product-name" label="Procedimiento" value=  {"Procedimiento", productProcedimiento}onChange={(e) => setProcedimiento(e.target.value)} />
                                        </FormControl>
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={closeEditDialog} color="primary">
                                        Cancelar
                                    </Button>
                                    <Button onClick={closeEditDialog} color="primary">
                                        Editar
                                    </Button>
                                </DialogActions>
                            </Dialog>

        </Card>
    </Box>
  );
}
