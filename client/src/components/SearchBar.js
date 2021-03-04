import React from 'react';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField'

export default function SearchBar(props) {
//   const classes = useStyles();


  return (
    <div>
        <form noValidate autoComplete="off" onSubmit={(event) => event.preventDefault()}>
            <TextField id="outlined-basic" label="Search" variant="outlined" fullWidth onChange={props.onChange}/>
        </form>
    </div>
  );
}