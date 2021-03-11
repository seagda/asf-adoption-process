import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import MultiSelectChips from "../components/MultiSelectChips"
import SingleSelect from "../components/SingleSelect";
import RoleTitles from "../components/RoleTitles";

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        width: "100%",
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center",
            padding: "1em"
        }
    }
}));

export default function RoleTitleEdit(props){
    const classes = useStyles();

    return(
        <Grid item container className={classes.itemContainer}>
        <Grid container style={{marginTop: "1em"}}>
            <Grid item>
                <Typography variant="h4">Dog Status</Typography>
                <Divider/>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item container justify="space-between">
                <Grid item style={{marginTop: "1em"}}>
                    <Chip label={props.statusLabel}/>
                    <br/>
                    <TextField style={{marginTop: "1em"}} variant="outlined" label="Add Details" rows={4}/>
                </Grid>
                <Grid item>
                        <div>
                            <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Select Status</InputLabel>
                            <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={dogStatusNew}
                            onChange={handleStatusChange}
                            name="dogStatusNew"
                            label="Select Status"
                            >
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            {dogStatusList.map((status)=><MenuItem value={status.id}>{status.name}</MenuItem>)}
                            </Select>
                            </FormControl>

                        </div>
                    <br/>
                    {/* {repeat ? <Typography style={{color: "red", fontWeight: 800}}>Repeated Relocations</Typography> : null} */}
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    )
}