import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import {
  Chart,
  PieSeries,
  Title,
  Legend
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import Hidden from '@material-ui/core/Hidden';

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      text: props.text
    }
  }

  render() {
    const { data: data } = this.state.data;
    const { text: text } = this.state.text;

    return (
      <Grid container justify="space-evenly" style={{marginTop: "1em"}}>
            <Grid item >
              <Paper marginLeft="1em" >
                <Chart data={data} height="50" width="300">
                  <Legend/>
                  <Title text={text}/>
                  <Hidden xsUp>
                    <PieSeries valueField="number" argumentField="status"/>
                  </Hidden>
                </Chart>
              </Paper>
            </Grid>
            <Grid item >
              <Paper marginLeft="1em" >
                <Chart data={data} height="100%" width="300">
                  <Legend/>
                    <PieSeries valueField="number" argumentField="status" outerRadius="0"/>
                </Chart>
              </Paper>
            </Grid>
            <Grid item >
              <Paper marginLeft="1em">
                <Chart data={data} width="300" height="300">
                  <Animation /> 
                  <PieSeries valueField="number" argumentField="status"/>
                </Chart>
              </Paper>
             </Grid>
          </Grid>
    );
  }
}
