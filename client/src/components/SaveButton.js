// Takes props: buttonText
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    maxWidth: '15em', 
    maxHeight: '4em', 
    minWidth: '15em', 
    minHeight: '4em'
  },
  link: {
    textDecoration: "none"
  }
}));

export default function SaveButton(props) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<SaveIcon />}
        type="submit"
      >
          {`${props.buttonText}`}
      </Button>
    </div>
  );
}