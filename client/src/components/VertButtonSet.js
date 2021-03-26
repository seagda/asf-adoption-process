import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
    marginLeft: "6%"
  },
  size: {
    maxWidth: '500px', 
    maxHeight: '40px', 
    minWidth: '500px', 
    minHeight: '40px',
  }

}));

export default function GroupOrientation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="text"
      >
        <Button className={classes.size}>Adopt a Dog</Button>
        <Button className={classes.size}>Apply to Foster</Button>
        <Button className={classes.size}>Apply to Transport</Button>
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="text"
      >
        <Button className={classes.size}>Fundraise</Button>
        <Button className={classes.size}>Donate</Button>
        <Button className={classes.size}>Support Admin</Button>
      </ButtonGroup>
    </div>
  );
}