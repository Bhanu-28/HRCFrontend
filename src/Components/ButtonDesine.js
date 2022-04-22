import { Button } from '@mui/material';
import React from 'react'

export default function ButtonDesine(props) {
  return (
    <Button style={{color: props.color , width : props.width}} size="large" disabled ={props.disableDelete} variant={props.variant} onClick={props.handleClickOpen}>
    <div  className={props.animation}>

    {props.text} 
    </div>
  </Button>);
  
}
