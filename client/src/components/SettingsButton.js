// Takes props: toLink, buttonText
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PetsIcon from '@material-ui/icons/Pets';
import { NavLink, Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(5),
    paddingLeft: "10",
    paddingRight: "10"
  },
  link: {
    textDecoration: "none"
  }
}));

export default function SettingButton(props) {
  const classes = useStyles();

  return (
    <div>
        <NavLink className={classes.link} to={props.toLink}>
            <Button
            variant="outlined"
            size="large"
            color="primary"
            className={classes.button}
            startIcon={<PetsIcon />}
             >
                {`${props.buttonText}`}
            </Button>
        </NavLink>

    </div>
  );
}