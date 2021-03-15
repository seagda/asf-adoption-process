import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Image from "../components/Image";
import EditButton from "../components/EditButton";

import ashley from "../assets/ashley.jpg"

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        },
        marginBottom: "5em"
    },
    form: {
        paddingRight: "3em",
        [theme.breakpoints.down("sm")]:{
            padding: "1em"
        }
    },
    formItem: {
        marginBottom: "1em"
    },
    picContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
        },
        marginBottom: "2em"
    }
}));

export default function UserMainInfoEdit(props){
    const classes = useStyles();

    const [selectData, setSelectData] = useState({
        
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
            
        })
    },[])

    return(
        <Grid item container className={classes.itemContainer}>
        {/* <Grid container>
            <Grid item style={{marginTop: "3em"}}>
                <Typography variant="h4">XXX</Typography>
                <Divider/>
            </Grid>
        </Grid> */}
    <Grid container justify="space-evenly" className={classes.picContainer}>
        <Grid item>
                <Image alt={"Ashley"} pic={ashley} />
                <EditButton buttonText="Change Photo" toLink="/"/>
            </Grid>
        <Grid item>
                <div className={classes.form}>
                    <Grid item container className={classes.formItem}>
                        <TextField variant="outlined" InputLabelProps={{shrink: true}} label="First Name" onChange={props.handleInputChange} value={props.userData?.firstName} name="firstName"/>
                    </Grid>
                    <Grid item container className={classes.formItem}>
                        <TextField variant="outlined" InputLabelProps={{shrink: true}} label="Last Name" onChange={props.handleInputChange} value={props.userData?.lastName} name="lastName"/>
                    </Grid>
                    <Grid item container className={classes.formItem}>
                        <TextField variant="outlined" InputLabelProps={{shrink: true}} label="Phone" onChange={props.handleInputChange} value={props.userData?.phone} name="phone"/>
                    </Grid>
                    <Grid item container className={classes.formItem}>
                        <TextField type="email" variant="outlined" InputLabelProps={{shrink: true}} label="Email" onChange={props.handleInputChange} value={props.userData?.email} name="email"/>
                    </Grid>
                    <Grid item container className={classes.formItem} direction="column">
                        <InputLabel id="birthday">Date of birth</InputLabel>
                        <TextField type="date" variant="outlined" InputLabelProps={{shrink: true}} labelId="birthday" onChange={props.handleInputChange} value={props.userData?.dob} name="dob"/>
                    </Grid>
                </div>
            </Grid>
        </Grid>
        <Grid container justify="space-evenly">
            <Grid item container direction="column" style={{marginTop: "2em"}} xs={10} sm={10} md={6} lg={6}>
                <Typography>Address:</Typography>
                <TextField label="Street" InputLabelProps={{shrink: true}} onChange={props.addressChange} value={props.streetValue} name="street"/>
                <TextField label="City" InputLabelProps={{shrink: true}} onChange={props.addressChange} value={props.cityValue} name="city"/>
                <TextField label="State" InputLabelProps={{shrink: true}} onChange={props.addressChange} value={props.stateValue} name="state"/>
                <TextField label="Zip" InputLabelProps={{shrink: true}} onChange={props.addressChange} value={props.zipValue} name="zip5"/>
            </Grid>
        </Grid>
    </Grid>
    )
}