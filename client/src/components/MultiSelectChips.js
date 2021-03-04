// re-use this as an input for multi select options, takes an array of options
// props 

import React from 'react'
import Input from '@material-ui/core/Input';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';


const useStyles=makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: '100%',
      maxWidth: '100%',
      },
      chips: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      chip: {
        margin: 2,
      },
      noLabel: {
        marginTop: theme.spacing(3),
      }
}))

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 125;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 350
    },
  },
};


function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  export default function MultiSelectChips(props) {
    const classes = useStyles();
    const theme = useTheme();

  var selected =props.selectedOption || []
    console.log(props.selectedOption)
    return (
        <div>
          <FormControl className={classes.formControl}>
            {/* add the title to the input field via props below */}
            <InputLabel id="demo-mutiple-chip-label">{props.title}</InputLabel>
            <Select
              labelId="demo-mutiple-chip-label"
              id="demo-mutiple-chip"
              multiple
              value={selected}
              onChange={props.onOptionChange}
              input={<Input id="select-multiple-chip" />}
              renderValue={(selected) => (
                <div className={classes.chips}>
                  {selected ? selected.map((value) => (
                    <Chip key={value} label={props.options.find((option) => option.id === value).name} className={classes.chip} />
                  )): null}
                </div>
              )}
              MenuProps={MenuProps}
              //  pass in the props below which are names in this case
            > {props.options.map((option) => (
                <MenuItem key={option.id} value={option.id} style={getStyles(option.name, selected, theme)}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      );
}