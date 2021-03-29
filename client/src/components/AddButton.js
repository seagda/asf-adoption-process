import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, Link } from 'react-router-dom';
import Add from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    maxWidth: '200px', 
    maxHeight: '40px', 
    minWidth: '200px', 
    minHeight: '40px',
  },
  link: {
    textDecoration: "none"
  }
}));

export default function AddButton(props) {
  const classes = useStyles();

  return (
    <div>
      <NavLink className={classes.link} to={props.toLink}>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<Add />}
      >
         {`${props.buttonText}`}
      </Button>
      </NavLink>
    </div>
  );
}