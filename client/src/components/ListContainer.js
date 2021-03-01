import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(4),
    marginTop: theme.spacing(2),
    width: '100%',
    maxWidth: '90%',
    flex: "wrap",
    direction: "row"
    // backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function ListContainer({children}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        {children}
    </div>
  )
}
 