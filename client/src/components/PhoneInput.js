import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import NumberFormat from 'react-number-format';

const useStyles = makeStyles(theme => ({

}))

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;
  
    return (
      <MaskedInput
        {...other}
        ref={(ref) => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
        placeholderChar={'\u2000'}
        showMask
      />
    );
  }
  
  TextMaskCustom.propTypes = {
      inputRef: PropTypes.func.isRequired,
  };
  
  function NumberFormatCustom(props) {
      const { inputRef, onChange, ...other } = props;

      return (
        <NumberFormat
          {...other}
          getInputRef={inputRef}
          onValueChange={(values) => {
            onChange({
              target: {
                name: props.name,
                value: values.value,
              },
            });
          }}
          thousandSeparator
          isNumericString
          prefix="$"
        />
      );
    }
    
    NumberFormatCustom.propTypes = {
      inputRef: PropTypes.func.isRequired,
      name: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
    };

export default function PhoneInput(){
    const classes = useStyles();
    const [values, setValues] = React.useState({
        textmask: '(1  )    -    ',
        numberformat: '1320',
      });
    
      const handleChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      };

    return (
        <FormControl>
            <TextField
            value={values.textmask}
            onChange={handleChange}
            variant="outlined"
            label="Phone"
            name="textmask"
            id="formatted-text-mask-input"
            inputComponent={TextMaskCustom}
            />
        </FormControl>
    )
}