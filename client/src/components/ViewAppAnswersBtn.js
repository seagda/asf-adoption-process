// Takes props: toLink, buttonText
import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { NavLink, Link } from 'react-router-dom';


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

export default function ViewAppAnswersBtn(props) {
  const classes = useStyles();

  return (
    <div>
        <NavLink className={classes.link} to={props.toLink}>
            <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            startIcon={<QuestionAnswerIcon />}
             >
                {`${props.buttonText}`}
            </Button>
        </NavLink>

    </div>
  );
}