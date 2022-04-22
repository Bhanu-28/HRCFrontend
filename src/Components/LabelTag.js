import React from 'react'

export default function LabelTag(props) {

   
        return( <label
            htmlFor="props.htmlFor"
            className=" text-sm text-white"
        >
            {props.text}{" "}

        </label>
        );
    }
  

