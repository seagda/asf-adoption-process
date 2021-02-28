import React, {useState, useEffect, Component} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import Image from "../components/Image";
import EditButton from "../components/EditButton";
import SaveButton from "../components/SaveButton";
import DogStatusEdit from "../components/DogStatusEdit";
import IntakeDetailsEdit from "../components/IntakeDetailsEdit";
import BehaviorForm from "../components/BehaviorForm";
import HealthRecordEdit from "../components/HealthRecordEdit";
import RecordCards from "../components/RecordCards";

import dog from "../assets/Cool_Dog.png";

const useStyles = makeStyles(theme => ({
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
    },
    references: {
        [theme.breakpoints.down("xs")]:{
            marginLeft: "5em"
        }
    },
    root: {
        marginBottom: "1em",
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    }
}))

export default function ProfileForm(){
    const classes = useStyles();

    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [size, setSize] = useState();
    const [location, setLocation] = useState();
    const [about, setAbout] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, age, gender, size, location, about)
    }

    return (
        <form onSubmit={handleSubmit}>
        <Grid item container className={classes.itemContainer}>
        <Grid container justify="space-evenly" className={classes.picContainer}>
            <Grid item>
                <Image alt={"cool dog"} pic={dog} />
                <EditButton buttonText="Change Photo" toLink="/"/>
            </Grid>
            <Grid item>
                <div className={classes.form}>
                    <Grid item container className={classes.formItem}>
                        <TextField variant="outlined" label="Name" onChange={e => setName(e.target.value)}/>
                    </Grid>
                    <Grid item container className={classes.formItem}>
                        <TextField variant="outlined" label="Age" onChange={e => setAge(e.target.value)}/>
                    </Grid>
                    <Grid item container className={classes.formItem}>
                        <TextField variant="outlined" label="Gender" onChange={e => setGender(e.target.value)}/>
                    </Grid>
                    <Grid item container className={classes.formItem}>
                        <TextField variant="outlined" label="Size" onChange={e => setSize(e.target.value)}/>
                    </Grid>
                    <Grid item container className={classes.formItem}>
                        <TextField variant="outlined" label="Location" onChange={e => setLocation(e.target.value)}/>
                    </Grid>
                    <Grid item container className={classes.formItem}>
                        <TextField rows={4} multiline variant="outlined" label="About" onChange={e => setAbout(e.target.value)}/>
                    </Grid>
                </div>
            </Grid>
            
        </Grid>
        
        <DogStatusEdit/>
        <IntakeDetailsEdit/>
        <BehaviorForm/>
        <HealthRecordEdit/>
        <RecordCards/>
        
        <Grid item container className={classes.formItem} justify={"flex-end"}>
            <SaveButton buttonText="Save Changes"/>
        </Grid>
    </Grid>
    </form>
    )
}