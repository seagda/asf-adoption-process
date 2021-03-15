import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        },
        marginBottom: "5em"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
        // fullWidth: true
    }
}));

export default function BreedEdit(props){
    const classes = useStyles();

    return(
        <Grid item container className={classes.itemContainer}>
        <Grid container>
            <Grid item style={{marginTop: "3em"}}>
                <Typography variant="h4">Breed Info</Typography>
                <Divider/>
            </Grid>
        </Grid>
        <Grid container justify="space-evenly">
            <Grid item style={{marginTop: "1em"}}>
                <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="isPurebred">Purebred?</InputLabel>
                    <Select
                    labelId="isPurebred"
                    id="isPurebred"
                    onChange={props.purebredChange}
                    value={props.purebredValue}
                    name="isPurebred"
                    label="Select Status"
                    InputLabelProps={{shrink: true}}
                    >
                    <MenuItem value="true">Yes</MenuItem>
                    <MenuItem value="false">No</MenuItem>
                    </Select>
                    </FormControl>

                </div>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <TextField className={classes.formControl} variant="outlined" label="Secondary Breed" InputLabelProps={{shrink: true}} onChange={props.handleInputChange} value={props.dogData?.secondaryBreed} name="secondaryBreed"/>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="coat">Coat Color</InputLabel>
                    <Select
                    labelId="coat"
                    id="coat"
                    onChange={props.coatColorChange}
                    value={props.coatColorData}
                    name="coat"
                    label="coat"
                    InputLabelProps={{shrink: true}}
                    >
                    <MenuItem value="self merle">Self Merle</MenuItem>
                    <MenuItem value="double merle">Double Merle</MenuItem>
                    <MenuItem value="blue merle">Blue Merle</MenuItem>
                    <MenuItem value="red merle">Red Merle</MenuItem>
                    <MenuItem value="red tri">Red Tri</MenuItem>
                    <MenuItem value="red bi">Red Bi</MenuItem>
                    <MenuItem value="red">Red</MenuItem>
                    <MenuItem value="black tri">Black Tri</MenuItem>
                    <MenuItem value="black bi">Black Bi</MenuItem>
                    <MenuItem value="black">Black</MenuItem>
                    <MenuItem value="tri color">Tri Color</MenuItem>              
                    <MenuItem value="white">White</MenuItem>
                    <MenuItem value="brown">Brown</MenuItem>
                    </Select>
                    </FormControl>

                </div>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <TextField className={classes.formControl} type="number" variant="outlined" label="weight" InputLabelProps={{shrink: true}} onChange={props.handleInputChange} value={props.dogData?.weight} name="weight"/>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="size">Size</InputLabel>
                    <Select
                    labelId="size"
                    id="size"
                    onChange={props.sizeChange}
                    value={props.sizeValue}
                    name="size"
                    label="Size"
                    InputLabelProps={{shrink: true}}
                    >
                    <MenuItem value="mini">Mini</MenuItem>
                    <MenuItem value="small">Small</MenuItem>
                    <MenuItem value="medium">Medium</MenuItem>
                    <MenuItem value="large">Large</MenuItem>
                    </Select>
                    </FormControl>

                </div>
            </Grid>
        </Grid>
    </Grid>
    )
}