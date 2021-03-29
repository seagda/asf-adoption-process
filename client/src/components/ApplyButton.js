// Takes props: toLink, buttonText
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PetsIcon from '@material-ui/icons/Pets';
import { NavLink, Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    maxWidth: '300px', 
    maxHeight: '40px', 
    minWidth: '300px', 
    minHeight: '40px',
    [theme.breakpoints.down("s")]:{
      marginLeft: "0%",
  },
  },
  link: {
    textDecoration: "none"
  }
}));

export default function ApplyButton(props) {
  const classes = useStyles();

  return (
    <div>
        <NavLink className={classes.link} to={props.toLink}>
            <Button
            variant="contained"
            color={props.color}
            className={classes.button}
            startIcon={props.icon}
             >
                {`${props.buttonText}`}
            </Button>
        </NavLink>

    </div>
  );
}