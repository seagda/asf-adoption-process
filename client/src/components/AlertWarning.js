import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function DescriptionAlerts(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="warning"
      action={
        <Button color="inherit" size="small">
          MARK AS READ
        </Button>
      }>
        <AlertTitle>Alert</AlertTitle>
        <strong>{props.message}</strong>
      </Alert>
    </div>
  );
}
