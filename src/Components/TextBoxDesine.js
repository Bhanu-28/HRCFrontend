import {  TextField } from '@mui/material';

import React from 'react'

export default function TextBoxDesine(props) {
    return (
    //   <TextField>
    //   <input
    //   type={props.type} 
    //   //id={Id}
    //   name={props.name}
    //   // label={props.label}
    //   value={props.value} 
    //   onChange={props.handleChange} 
    //   // required={Required}
    //   placeholder={props.label}
    //   className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    // />
    // </TextField>
      
    <TextField  sx={{
       input: { backgroundColor: 'white' , borderRadius : '12px' },
      // '& . MuiTextField-input' : {
      //   borderRadius : '12px'
      // },
    }} className='rounded-lg ' style={{width : props.width}}  type={props.type} 
    InputLabelProps={{shrink : props.shrink }} 
    onChange={props.handleChange} name={props.name} label={props.label} value={props.value}  variant="filled" />
    
    );
  }


    
