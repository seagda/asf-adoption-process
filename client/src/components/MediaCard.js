import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  marginLeft: theme.spacing(20),
  marginTop: theme.spacing(4),
  root: {
    maxWidth: "90%",
  },
  media: {
    height: 300,
  },
}));

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://place-puppy.com/300x300"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Bruce
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Loves long walks and fetch. Rescued in 2015.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Update Profile
        </Button>
        <Button size="small" color="primary">
          Add Behavior Assessment
        </Button>
      </CardActions>
    </Card>
  );
}
