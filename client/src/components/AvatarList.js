import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(4),
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
        <ListItemAvatar>
          <Avatar alt={props.name} src={props.image} />
        </ListItemAvatar>
        <ListItemText
          primary={props.name}
          secondary={
            <React.Fragment>
              <ul>
              <Typography
                variant="body2"
                color="textPrimary"
              >
                <li><strong>Role:</strong> {props.role}</li>
                <li><strong>Location:</strong> {props.city}</li>
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
