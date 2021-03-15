import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2),
    marginTop: theme.spacing(2),
    width: '100%',
    maxWidth: '90%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function AvatarList(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar >
          <NavLink to={`/userView/${props.id}`}>
            <Avatar alt={props.firstName} src={props.image} className={classes.large}/>
          </NavLink>
        </ListItemAvatar>
        <ListItemText
          primary={props.firstName + " " + props.lastName} 
          secondary={
            <React.Fragment>
              <ul>
              <Typography
                variant="body2"
                color="textPrimary"
              >
                <li><strong>Role:</strong> {props.roles.map( (role) => role.name).join(", ")}</li>
                <li><strong>Location:</strong> {props.ResidesInRegion.name}</li>
                <li><strong>Email:</strong> {props.email}</li>
              </Typography>
              </ul>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />    
    </List>
  );
}
