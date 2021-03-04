// Takes props: label
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    
}))

const GreenCheckbox = withStyles({
  root: {
    color: "#28527A",
    '&$checked': {
      color: "#F4D160",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function HoldCheckbox(props) {
  const [state, setState] = React.useState({
    checkedG: false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label={props.label}
      />
    </FormGroup>
  );
}