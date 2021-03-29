import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    [theme.breakpoints.down("md")]:{
        justifyContent: "center",
        alignItems: "center",
        display: "inherit !important",
    },
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
    color: "#28527A",
    [theme.breakpoints.down("md")]:{
        maxWidth: '290px', 
        maxHeight: '40px', 
        minWidth: '290px', 
        minHeight: '40px',
    },
  }, 
  button: {
    textDecoration: 'none',
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
        <NavLink className={classes.button} to="/adopterApplication">
            <Button className={classes.size} >Adopt a Dog</Button>
        </NavLink>
        <NavLink className={classes.button} to="/fosterApplication">
            <Button className={classes.size} >Apply to Foster</Button>
        </NavLink>
        {/* flag to update link */}
        <NavLink className={classes.button} to="/adopterApplication">
            <Button className={classes.size} >Apply to Transport</Button>
        </NavLink>
       </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="text"
      >
       
        <Button className={classes.size} onClick={event =>  window.location.href='https://www.paypal.com/paypalme/ASF'} >Donate</Button>
        <Button className={classes.size} onClick={event =>  window.location.href='https://www.australianshepherdsfurever.org/fundraising'} >Fundraise</Button>
        {/* flag to update link */}
        <NavLink className={classes.button} to="/adopterApplication">
            <Button className={classes.size} >Apply to Support Admin</Button>
        </NavLink>
     </ButtonGroup>
    </div>
  );
}