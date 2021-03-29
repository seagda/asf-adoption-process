// Takes props: toLink, buttonText
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import UpdateIcon from '@material-ui/icons/Update';
import { NavLink, Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    maxWidth: '300px', 
    maxHeight: '40px', 
    minWidth: '300px', 
    minHeight: '40px',
  },
  link: {
    textDecoration: "none"
  }
}));

export default function UpdateButton(props) {
  const classes = useStyles();

  return (
    <div>
        <NavLink className={classes.link} to={props.toLink}>
            <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<UpdateIcon />}
             >
                {`${props.buttonText}`}
            </Button>
        </NavLink>

    </div>
  );
}