import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(35),
      height: theme.spacing(8),
    },
  },
}));

export default function PieChartLegend(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={4}>
        <Typography>
          {props.list}
        </Typography>
      </Paper>
    </div>
  );
}