
import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <>
        <h2>Titulo: {this.props.info.title}</h2>
        <p>Cuerpo: {this.props.info.description}</p>
        <p>Autor {this.props.info.author}</p>
        <p>Fecha: {this.props.info.publishedAt}</p>
        <button onClick={this.props.delete}>Borrar</button>
      </>
    );
  }
}

export default Card;


/*

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const cardProduct = (props) => {
  return (
    <section>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day {bull}
        </Typography>
          <Typography variant="h5" component="div">
            {this.props.info.title}
        </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {this.props.info.author}
        </Typography>
          <Typography variant="body2">
            {this.props.info.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </section>
  );
}

export default cardProduct

*/
