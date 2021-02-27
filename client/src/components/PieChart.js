import * as React from 'react';
import Paper from '@material-ui/core/Paper';
// import { Animation } from '@devexpress/dx-react-chart';
import {
  Chart,
  PieSeries,
  Title
} from '@devexpress/dx-react-chart-material-ui';


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
          <Title
          text="This is the greatest" />
        </Chart>
        {/* <Animation /> */}
      </Paper>
    );
  }
}
