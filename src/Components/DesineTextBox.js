import React from 'react'

export default function DesineTextBox(props) {
  return (
      

    <input type={props.text} name={props.name}   onChange={props.handleChange} label={props.label} value={props.value}
    placeholder = {props.label}
    class="mt-1 text-black focus:ring-indigo-500 focus:border-indigo-500 block 
    w-60 shadow-sm sm:text-sm border-gray-300 rounded-md"/>
      
  );
}
