import React, {useState, useEffect} from 'react';
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

export default function DogStatusEdit(props){
    const classes = useStyles();

    const [selectData, setSelectData] = useState({
        DogStatusId: 0
    })

    const handleSelectChange = (event)=>{
        setSelectData({
            ...selectData,
            [event.target.name]: event.target.value
        })
        props.handleInputChange(event)
    }

    useEffect(()=>{
        setSelectData({
            DogStatusId: props.dogData.DogStatusId
        })
    },[props.dogData.DogStatusId])

    return(
        <Grid item container className={classes.itemContainer}>
        <Grid container style={{marginTop: "1em"}}>
            <Grid item>
                <Typography variant="h4">Dog Status</Typography>
                <Divider/>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item container justify="space-around">
                <Grid item style={{marginTop: "1em"}}>
                    <Chip label={props.statusLabel}/>
                    <br/>
                    {/* <TextField style={{marginTop: "1em"}} variant="outlined" label="Add Details" rows={4}/> */}
                </Grid>
                <Grid item>
                        <div>
                            <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="DogStatusId">Select Status</InputLabel>
                            <Select
                            labelId="DogStatusId"
                            id="DogStatusId"
                            value={selectData.DogStatusId}
                            onChange={handleSelectChange}
                            name="DogStatusId"
                            label="Select Status"
                            >
                            <MenuItem value={0}>Select Status</MenuItem>
                            {props.statusList}
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