import { Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import React from 'react'


export function DialogBox(props) {
    return (<Dialog  maxWidth ={props.maxWidth} open={props.open} onClose={props.handleClose}>
  
      <DialogContent  style={{backgroundColor : '#2C4250' , color : 'white'}}>
  
        {props.dailogContent}
  
      </DialogContent>
      <DialogActions style={{backgroundColor : '#2C4250'}}>
  
        <Button  style={{color: 'white'  , borderColor : 'white' , width : '100%'}} variant={'outlined'} onClick={props.handleClose}>{props.btn2}</Button>
        <Button style={{color: 'white' , borderColor : 'white',width : '100%'}}  variant={'outlined'} onClick={props.handleSubmit}>{props.btn1}</Button>
      </DialogActions>
    </Dialog>);
  }
  
