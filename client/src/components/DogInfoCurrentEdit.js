import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import {NavLink} from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

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

    const [selectData, setSelectData] = useState({
        CurrentlyWithId: 0
    })

    const handleSelectChange = (event)=>{
        setSelectData({
            ...selectData,
            [event.target.name]: event.target.value
        })
        props.handleInputChange(event)
    }

    const sortIt = sortBy => (a, b) => {
        if (a[sortBy] > b[sortBy]) {
          return 1;
        } else if (a[sortBy] < b[sortBy]) {
          return -1;
        }
        return 0;
      }

    useEffect(()=>{
        setSelectData({
            CurrentlyWithId: props.dogData?.CurrentlyWithId
        })
    },[props.dogData?.CurrentlyWithId])

    return(
        <Grid item container className={classes.itemContainer}>
            <Grid item container xs={10} sm={8} md={8} lg={10} style={{marginTop: "3em"}} direction="column">
                    <Grid item>
                        <Typography variant="h4">Current Info</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item container style={{marginTop: "1em"}}>
                        <Grid item xs={10} sm={6} md={8} lg={6} style={{marginTop: "1em"}}>
                            <div>
                                <FormControl variant="outlined" style={{minWidth: 195, marginBottom: "1em"}}>
                                    <InputLabel id="demo-simple-select-outlined-label">Currently With</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        // InputLabelProps={{shrink: true}}
                                        name="CurrentlyWithId"
                                        value={selectData.CurrentlyWithId}
                                        onChange={handleSelectChange}
                                    >
                                        <MenuItem disabled value="">Currently with?</MenuItem>
                                        {props.asfUsers.sort(sortIt(props.asfUsers))}
                                        
                                    </Select>
                                </FormControl>
                            </div>
                        </Grid>
                        <Grid item xs={10} sm={6} md={8} lg={6}>
                            {window.location.href.includes("createdog") ? null :
                                <Grid item container style={{marginTop: "1em"}} justify="center">
                                    <TextField label="Behavior Issues" InputLabelProps={{shrink: true}} variant="outlined" onChange={props.handleInputChange} value={props.dogData.behaviorIssues} name="behaviorIssues"/>
                                </Grid>
                            }

                        </Grid>
                        {/* <Grid item xs={10} sm={6} md={8} lg={6}>

                        </Grid> */}
                    </Grid>
            </Grid>
        </Grid>
    )
}