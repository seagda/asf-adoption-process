import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  margin: theme.spacing(20),
  
  root: {
    maxWidth: "90%",
    minWidth: "70%",
    marginTop: theme.spacing(2),
    flex: "wrap",
    border: '2px solid',
    borderColor: '#E7EDF3',
    borderRadius: 16,
    transition: '0.4s',
    boxShadow: '0 8px 16px 0 #BDC9D7',
    '&:hover': {
      borderColor: '#5B9FED',
    },
  }
}));

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <NavLink to={`/dogView/${props.id}`}>
        <CardMedia
          className={classes.media}
          component="img"
          alt={props.name}
          height="100%"
          image={props.image}
          title={props.name}
        />
        </NavLink>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography gutterBottom variant="p" component="h3">
            Gender: {props.gender}
          </Typography>
          <Typography gutterBottom variant="p" component="h3">
            Date of Birth: {props.dob}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <NavLink style={{textDecoration: "none"}} to={`/dogView/${props.id}`}>
        <Button size="small" color="primary" to={props.dossierLink}>
          View Dossier
        </Button>
      </NavLink>
      </CardActions>
    </Card>
  );
}
