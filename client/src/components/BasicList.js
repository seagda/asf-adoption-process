import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: "90%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function BasicList(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="alert" src="https://www.town.winthrop.ma.us/sites/g/files/vyhlif4061/f/styles/news_image/public/pages/alert.png?itok=E3AWz5Wm"/>
        </ListItemAvatar>
        <ListItemText primary={props.message}/>
      </ListItem>
    </List>
  );
}
