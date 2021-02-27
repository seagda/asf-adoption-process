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

    this.state = props.data
  }

  render() {
    const { data: data } = this.state;

    return (
      <Paper>
        <Chart
          data={data}
        >
          <PieSeries
            valueField="number"
            argumentField="status"
          />
           <Legend/>
          <Title
          text="fjdklfjklsajfkldkfdlkdsl;kfl;sd "/>
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
