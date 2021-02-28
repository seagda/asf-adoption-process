import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  PieSeries,
  Title,
  Legend
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';


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
      <Paper>
        <Chart data={data} >
          <Legend/>
          <Title text={text}/>
          <Animation />
          <PieSeries valueField="number" argumentField="status"/>
        </Chart>
      </Paper>
    );
  }
}
