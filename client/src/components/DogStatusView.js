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
import API from "../utils/API";

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

export default function DogStatusView(props){
    const classes = useStyles();

    const [dogStatusList, setDogStatusList] = useState([]);

    useEffect(()=>{
        LoadStatus();
    },[])

    function LoadStatus (){
        API.getDogStatus().then(res =>{
            setDogStatusList(res.data)
            // setMicrochipMfgList(res.data)
            // console.log(res.data)
        }).catch(err=>{
            console.error(err.response.data.message)
            // alert("get data failed")
        })
    }

    return(
        <Grid item container className={classes.itemContainer}>
        <Grid container style={{marginTop: "2em"}}>
            <Grid item>
                <Typography variant="h4">Dog Status</Typography>
                <Divider/>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item container justify="space-between">
                <Grid item style={{marginTop: "1em"}}>
                    <Chip label={(dogStatusList.find((status)=>status.id === props.dogData?.DogStatusId)|| {}).name}/>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    )
}