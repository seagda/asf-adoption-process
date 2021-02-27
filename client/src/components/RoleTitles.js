// Takes props: label
import React from 'react';
import Chip from "@material-ui/core/Chip";

export default function RoleTitles(props){
    return(
        <Chip label={props.label}/>
    )
}