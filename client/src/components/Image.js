import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    large: {
        marginLeft: "2em",
        marginRight: "20em",
        width: theme.spacing(40),
        height: theme.spacing(40),
        [theme.breakpoints.down("md")]: {
            width: theme.spacing(30),
            height: theme.spacing(30),
            marginRight: "10em"
        },
        [theme.breakpoints.down("sm")]: {
            width: theme.spacing(20),
            height: theme.spacing(20),
            marginRight: "4em"
        },
        [theme.breakpoints.down("xs")]: {
            width: theme.spacing(20),
            height: theme.spacing(20),
            marginRight: 0
        }
    }
}))

export default function Image(props){
    const classes = useStyles();

    return (
        <Avatar alt="Ashley" src={props.pic} className={classes.large} />
    )
}