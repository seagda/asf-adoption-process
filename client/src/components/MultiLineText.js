// Takes props: label
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  export default function MultiLine(props){
    const classes = useStyles();

    return(
        <TextField
        id="outlined-multiline-static"
        label={props.label}
        multiline
        rows={4}
        variant="outlined"
      />
    )
  }