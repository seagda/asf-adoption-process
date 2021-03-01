import React, {useState, useEffect, Component} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import API from "../utils/API";

import Image from "../components/Image";
import EditButton from "../components/EditButton";
import SaveButton from "../components/SaveButton";
import DogStatusEdit from "../components/DogStatusEdit";
import IntakeDetailsEdit from "../components/IntakeDetailsEdit";
import BehaviorForm from "../components/BehaviorForm";
import HealthRecordEdit from "../components/HealthRecordEdit";
import RecordCards from "../components/RecordCards";
import SingleSelect from "../components/SingleSelect";
import UploadButton from "../components/UploadButton";
import MultiLineText from "../components/MultiLineText";

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
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
        // fullWidth: true
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
        labelWidth: 10
    },
    largeTextfield: {
        minWidth: "60em",
        [theme.breakpoints.down("sm")]:{
            minWidth: "20em"
        }
    }
}))

export default function ProfileForm(){
    const classes = useStyles();
    const repeat = true;

    const [dogIntakeData, setDogIntakeData] = useState({
        name: "",
        dob: null,
        gender: "",
        microchipId: 0,
        secondaryBreed: "",
        pullCost: 0,
        behaviorialIssues: "",
        medicalIssues: "",
        weight: 1,
        coat: "",
        asfId: 1
    })


    const [isPurebredData, setIsPurebredData] = useState({
        isPurebred: false
    });
    const handlePurebredChange = (event) => {
      const {name, value} = event.target
      setIsPurebredData({
          ...isPurebredData,
          [name]: value
      })
    };

    const [isBlockedData, setIsBlockedData] = useState({
        blocked: false
    });
    const handleBlockedChange = (event) => {
      const {name, value} = event.target
      setIsBlockedData({
          ...isBlockedData,
          [name]: value
      })
    };

    const [sizeData, setSizedata] = useState({
        size: ""
    });
    const handleSizeChange = (event) => {
      const {name, value} = event.target
      setSizedata({
          ...sizeData,
          [name]: value
      })
    };

    const createDogInputChange = event =>{
        const {name, value} = event.target
        setDogIntakeData({
            ...dogIntakeData,
            [name]: value
        })
    }
    

    const handleDogIntakeFormSubmit = event =>{
        event.preventDefault();
        API.createDog(dogIntakeData, isPurebredData, isBlockedData).then(res =>{
            console.log(res.data)
            setDogIntakeData({
                name: "",
                dob: null,
                gender: "",
                microchipId: 0,
                secondaryBreed: "",
                pullCost: 0,
                behaviorialIssues: "",
                medicalIssues: "",
                weight: 1,
                coat: "",
                asfId: 1
            })
            setIsPurebredData({
                isPurebred: false
            })
            setIsBlockedData({
                blocked: false
            })
            setSizedata({
                size: ""
            })
            window.location = "/My-Dogs"
        }).catch(err=>{
            console.error(err)
            alert("Create dog failed")
        })
    }

    // const dogStatus = (
    //     <Grid item container className={classes.itemContainer}>
    //     <Grid container style={{marginTop: "1em"}}>
    //         <Grid item>
    //             <Typography variant="h4">Dog Status</Typography>
    //             <Divider/>
    //         </Grid>
    //     </Grid>
    //     <Grid container>
    //         <Grid item container justify="space-between">
    //             <Grid item style={{marginTop: "1em"}}>
    //                 <Chip label="In Foster"/>
    //                 <br/>
    //                 <TextField style={{marginTop: "1em"}} variant="outlined" label="Add Details" rows={4}/>
    //             </Grid>
    //             <Grid item>
    //                     <div>
    //                         <FormControl variant="outlined" className={classes.formControl}>
    //                         <InputLabel id="demo-simple-select-outlined-label">Select Status</InputLabel>
    //                         <Select
    //                         labelId="demo-simple-select-outlined-label"
    //                         id="demo-simple-select-outlined"
    //                         onChange={handleStatusChange}
    //                         value="status"
    //                         name="status"
    //                         label="Select Status"
    //                         >
    //                         <MenuItem value="">
    //                         <em>None</em>
    //                         </MenuItem>
    //                         <MenuItem value="inTransit">In Transit</MenuItem>
    //                         <MenuItem value="inFoster">In Foster</MenuItem>
    //                         <MenuItem value="adopted">Adopted</MenuItem>
    //                         </Select>
    //                         </FormControl>

    //                     </div>
    //                 <br/>
    //                 {repeat ? <Typography style={{color: "red", fontWeight: 800}}>Repeated Relocations</Typography> : null}
    //             </Grid>
    //         </Grid>
    //     </Grid>
    // </Grid>
    // )

    const breedInfo = (
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
                    onChange={handlePurebredChange}
                    value={isPurebredData.isPurebred}
                    name="isPurebred"
                    label="Select Status"
                    >
                    <MenuItem value="true">Yes</MenuItem>
                    <MenuItem value="false">No</MenuItem>
                    </Select>
                    </FormControl>

                </div>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <TextField className={classes.formControl} variant="outlined" label="Secondary Breed" onChange={createDogInputChange} value={dogIntakeData.secondaryBreed} name="secondaryBreed"/>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <TextField className={classes.formControl} variant="outlined" label="Coat Color" onChange={createDogInputChange} value={dogIntakeData.coat} name="coat"/>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <TextField className={classes.formControl} type="number" variant="outlined" label="weight" onChange={createDogInputChange} value={dogIntakeData.weight} name="weight"/>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="size">Size</InputLabel>
                    <Select
                    labelId="size"
                    id="size"
                    onChange={handleSizeChange}
                    value={sizeData.size}
                    name="size"
                    label="Size"
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

    const intakeDetails = (
        <Grid item container className={classes.itemContainer}>
        <Grid container>
            <Grid item style={{marginTop: "3em"}}>
                <Typography variant="h4">Intake Details</Typography>
                <Divider/>
            </Grid>
        </Grid>
        <Grid container justify="space-evenly">
            <Grid item style={{marginTop: "1em"}}>
                <TextField className={classes.formControl} type="number" variant="outlined" label="Pull Cost" onChange={createDogInputChange} value={dogIntakeData.pullCost} name="pullCost"/>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <TextField className={classes.formControl} variant="outlined" label="Behavioral Issues" onChange={createDogInputChange} value={dogIntakeData.behaviorialIssues} name="behaviorialIssues"/>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="blocked">Blocked?</InputLabel>
                    <Select
                    labelId="blocked"
                    id="blocked"
                    onChange={handleBlockedChange}
                    value={isBlockedData.blocked}
                    name="blocked"
                    label="Is blocked?"
                    >
                    <MenuItem value="true">Yes</MenuItem>
                    <MenuItem value="false">No</MenuItem>
                    </Select>
                    </FormControl>
                </div>
            </Grid>
            {/* <Grid item style={{marginTop: "1em"}}>
                <SingleSelect title="Current Location"/>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <SingleSelect title="ASF Users"/>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <SingleSelect title="View Documents"/>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <UploadButton buttonText="Upload Documents" toLink=""/>
            </Grid> */}
        </Grid>
    </Grid>
    )

    const healthRecord = (
        <Grid item container className={classes.itemContainer}>
        <Grid container>
            <Grid item style={{marginTop: "3em"}}>
                <Typography variant="h4">Health Record</Typography>
                <Divider/>
            </Grid>
        </Grid>
        <Grid container>
            {/* <Grid item style={{marginTop: "1em"}}>
                <SingleSelect title="Vaccinations"/>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <SingleSelect title="Has Vet"/>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <SingleSelect title="Has Medical Issues"/>
            </Grid> */}
            <Grid item container style={{marginTop: "1em"}} justify="center">
                <TextField className={classes.largeTextfield} label="Medical Details" rows={6} multiline variant="outlined" onChange={createDogInputChange} value={dogIntakeData.medicalIssues} name="medicalIssues"/>
            </Grid>
        </Grid>
        <Grid container>
            <Grid item style={{marginTop: "1em"}}>
                <UploadButton buttonText="Upload Documents" toLink=""/>
            </Grid>
        </Grid>
    </Grid>
    )

    return (
        <form onSubmit={handleDogIntakeFormSubmit}>
        <Grid item container className={classes.itemContainer}>
        <Grid container justify="space-evenly" className={classes.picContainer}>
            <Grid item>
                <Image alt={"cool dog"} pic={dog} />
                <EditButton buttonText="Change Photo" toLink=""/>
            </Grid>
            <Grid item>
                <div className={classes.form}>
                    <Grid item container className={classes.formItem}>
                        <TextField variant="outlined" label="Name" onChange={createDogInputChange} value={dogIntakeData.name} name="name"/>
                    </Grid>
                    <Grid item container className={classes.formItem} direction="column">
                        <InputLabel id="birthday">Date of birth</InputLabel>
                        <TextField type="date" variant="outlined" labelId="birthday" onChange={createDogInputChange} value={dogIntakeData.dob} name="dob"/>
                    </Grid>
                    <Grid item container className={classes.formItem}>
                        <TextField variant="outlined" label="Gender" onChange={createDogInputChange} value={dogIntakeData.gender} name="gender"/>
                    </Grid>
                    <Grid item container className={classes.formItem}>
                        <TextField type="number" variant="outlined" label="Microchip ID" onChange={createDogInputChange} value={dogIntakeData.microchipId} name="microchipId"/>
                    </Grid>
                    <Grid item container className={classes.formItem}>
                        <TextField type="number" variant="outlined" label="ASF ID" onChange={createDogInputChange} value={dogIntakeData.asfId} name="asfId"/>
                    </Grid>
                    {/* <Grid item container className={classes.formItem}>
                        <TextField rows={4} multiline variant="outlined" label="About" onChange={e => setAbout(e.target.value)}/>
                    </Grid> */}
                </div>
            </Grid>
            
        </Grid>
        
        {/* <DogStatusEdit/> */}
        {breedInfo}
        {/* {dogStatus} */}
        {/* <IntakeDetailsEdit/> */}
        {intakeDetails}
        {/* <BehaviorForm/> */}
        {/* <HealthRecordEdit/> */}
        {healthRecord}
        {/* <RecordCards/> */}
        
        <Grid item container className={classes.formItem} justify={"flex-end"}>
            <SaveButton buttonText="Save Changes"/>
        </Grid>
    </Grid>
    </form>
    )
}