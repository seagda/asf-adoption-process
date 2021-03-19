import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import {NavLink} from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        }
    }
}));

export default function DogInfoCurrentEdit(props){
    const classes = useStyles();

    return(
        <Grid item container className={classes.itemContainer}>
            <Grid item container xs={10} sm={8} md={8} lg={10} style={{marginTop: "3em"}} direction="column">
                    <Grid item>
                        <Typography variant="h4">Current Info</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item container style={{marginTop: "1em"}}>
                        <Grid item xs={10} sm={6} md={8} lg={6}>
                            <Typography style={{fontWeight: "bold"}}>Currently With:

                            </Typography> 
                        </Grid>
                        <Grid item style={{marginTop: "1em"}}>
                            <div>
                                <FormControl variant="outlined" style={{minWidth: 195, marginBottom: "1em"}}>
                                    <InputLabel id="demo-simple-select-outlined-label">Microchip Company</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        // InputLabelProps={{shrink: true}}
                                        name="MicrochipMfgId"
                                        // value={selectData.MicrochipMfgId}
                                        // onChange={handleSelectChange}
                                    >
                                        <MenuItem disabled value="">Microchip Manufacturer</MenuItem>
                                        {props.mfgList}
                                        
                                    </Select>
                                </FormControl>
                            </div>
                        </Grid>
                        <Grid item xs={10} sm={6} md={8} lg={6}>
                            
                        </Grid>
                        <Grid item xs={10} sm={6} md={8} lg={6}>

                        </Grid>
                    </Grid>
            </Grid>
        </Grid>
    )
}