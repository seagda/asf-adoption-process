import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';

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
  const [open, setOpen] = React.useState(true);


  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert severity="warning"
        action={
          <Button color="inherit" size="small" onClick={() => {
            setOpen(false);
          }}>
            MARK AS READ
          </Button>
        }>
          <AlertTitle>Alert</AlertTitle>
          <strong>{props.message}</strong>
        </Alert>
      </Collapse>
    </div>
  );
}
