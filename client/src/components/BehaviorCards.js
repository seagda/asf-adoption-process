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
    margin: '1rem',
    border: '2px solid',
    borderColor: '#E7EDF3',
    borderRadius: 16,
    transition: '0.4s',
    boxShadow: '0 8px 16px 0 #BDC9D7',
    '&:hover': {
      borderColor: '#5B9FED',
    },
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  date: {
    fontSize: 14,
    marginBottom: 12,
  },
  mainTitle: {
    fontSize: '1.4rem',
    color: '#122740',
  },
  pointsEarnedTitle: {
    fontSize: '1.2rem',
    color: '#122740',
  },
  pos: {
    marginBottom: 12,
  },
  red: {
    color: '#a10505',
  },
  letterGradeStyle: {
    fontSize: '3rem',
    color: '#122740',
    marginLeft:"45%",
  },
});

export default function BehaviorCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const percentageScore = props.currentScore/props.totalPossible

  let letterGrade = ""
  let color = ""

  switch (true) {
    case percentageScore >= 0.97:
      letterGrade = "+A";
      break;
    case percentageScore >= 0.93:
      letterGrade = "A";
      color = "classes.red";
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
    case percentageScore <= 0.70:
      letterGrade = "N";
      break;
    // case percentageScore >= 0.67:
    //   letterGrade = "+D";
    //   break;
    // case percentageScore >= 0.65:
    //   letterGrade = "D";
    //   break;
    // case percentageScore <= 0.64:
    //   letterGrade = "F";
    //   break;
    default:
      letterGrade = "N/A";
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.date} color="textSecondary" gutterBottom>
         Date: {props.date}
        </Typography>
        <Typography className={classes.mainTitle} component="h2">
        <b>Behavior Assessment Grade:</b>
        </Typography>
        <Typography className={classes.letterGradeStyle} component="h2" justifyContent="center">
        <b>{letterGrade} </b>
        </Typography>
        <Typography className={classes.pointsEarnedTitle} component="h2">
        {props.currentScore} points earned of {props.totalPossible} possible
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Created By: {props.firstName} {props.lastName}
        </Typography>
      </CardContent>
      <CardActions>
        {/* // check this route */}
        <Button size="small" toLink={`/behaveAnswers/${props.id}`}>SEE FULL ASSESSMENT</Button>
      </CardActions>
    </Card>
  );
}
