import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '1rem'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    marginBottom: 12,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function BehaviorCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const percentageScore = props.currentScore/props.totalPossible

  let letterGrade = ""

  switch (true) {
    case percentageScore >= 0.97:
      letterGrade = "+A";
      break;
    case percentageScore >= 0.93:
      letterGrade = "A";
      break;
    case percentageScore >= 0.90:
      letterGrade = "-A";
      break;
    case percentageScore >= 0.87:
      letterGrade = "+B";
      break;
    case percentageScore >= 0.83:
      letterGrade = "B";
      break;
    case percentageScore >= 0.80:
      letterGrade = "-B";
      break;
    case percentageScore >= 0.77:
      letterGrade = "+C";
      break;
    case percentageScore >= 0.73:
      letterGrade = "C";
      break;
    case percentageScore >= 0.70:
      letterGrade = "-C";
      break;
    case percentageScore >= 0.67:
      letterGrade = "+D";
      break;
    case percentageScore >= 0.65:
      letterGrade = "D";
      break;
    case percentageScore <= 0.64:
      letterGrade = "F";
      break;
    default:
      letterGrade = "N/A";
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         Date: {props.date}
        </Typography>
        <Typography variant="h5" component="h2">
        <b>Behavior Assessment Grade: {letterGrade} </b>
        </Typography>
        <Typography variant="h5" component="h2">
        {props.currentScore} points earned of {props.totalPossible} possible
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Created By: {props.firstName} {props.lastName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
