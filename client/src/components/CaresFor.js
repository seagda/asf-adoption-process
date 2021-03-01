// Takes props: label
import React from 'react';
import Chip from "@material-ui/core/Chip";

export default function CaresFor(props){
    return(
        <Chip label={props.label}/>
    )
}