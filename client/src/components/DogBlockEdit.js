import React, {useState, useEffect, Component} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {matchPath} from "react-router-dom";
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
import NumberFormat from 'react-number-format';
import Button from "@material-ui/core/Button";

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
import BreedEdit from "../components/BreedEdit";

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
    numberItem: {
        marginBottom: "1em",
        minHeight: 60,
        maxWidth: 200
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

export default function ProfileForm(props){
    const classes = useStyles();
    const repeat = true;

    const [isPurebredData, setIsPurebredData] = useState({});
    const handlePurebredChange = (event) => {
      const {name, value} = event.target
      setIsPurebredData({
          ...isPurebredData,
          [name]: value
      })
    };

    const [coatColorData, setCoatColorData]= useState({});
    const handleCoatColorChange = (event) =>{
        const {name,value} = event.target
        setCoatColorData({
            ...coatColorData,
            [name]: value
        })
    }

    const [sizeData, setSizedata] = useState({});
    const handleSizeChange = (event) => {
      const {name, value} = event.target
      setSizedata({
          ...sizeData,
          [name]: value
      })
    };

    const [contactFormVis, setContactFormVis] = useState(true)
    const onClick = () => setContactFormVis(false)

    // origin type selector 
    const [originContactData, setOriginContactData] = useState({});
    const handleOriginContact = (event) => {
        const {name, value} = event.target
        setOriginContactData({
            ...originContactData,
            [name]: value
        })
    };

    const [addedExternalContactData, setAddedExternalContactData] = useState({})
    const handleAddedExternalContactChange = (event) =>{
        const {name,value} = event.target
        setAddedExternalContactData({
            ...addedExternalContactData,
            [name]: value
        })
    }

    const [addedAddressData, setAddedAddressData] = useState({})
    const handleExternalAddress = (event) =>{
        const {name,value} = event.target
        setAddedAddressData({
            ...addedAddressData,
            [name]: value
        })
    }

    const [genderData, setGenderData] = useState({});
    const handleGenderChange = (event) => {
      const {name, value} = event.target
      setGenderData({
          ...genderData,
          [name]: value
      })
    };

    const [dogStatusList, setDogStatusList] = useState([]);
    const [dogStatusNew, setDogStatusNew] = useState(0)
    const handleStatusChange = (event) => setDogStatusNew(event.target.value)

    const [microchipMfgList, setMicrochipMfgList] = useState([]);
    
    const [origins, setOrigins] = useState([])

    const [dogId, setDogId] = useState();
    console.log(dogId)

    useEffect(()=>{
        setDogIntakeData({
            name: props.dogData.name,
            dob: props.dogData.dob,
            gender: props.dogData.gender,
            microchipId: props.dogData.microchipId,
            asfId: props.dogData.asfId,
            secondaryBreed: props.dogData.secondaryBreed,
            weight: props.dogData.weight,
            medicalIssues: props.dogData.medicalIssues,
            behaviorialIssues: props.dogData.behaviorIssues,
            pullCost: props.dogData.pullCost,
            DogStatusId: props.dogData.DogStatusId
        })
        setDogId(props.dogData.id)
    }, [props.dogData])

    useEffect(()=>{
        LoadContacts();
        LoadStatus();
        LoadMfg();
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

    function LoadMfg (){
        API.microchipMfgGetAll().then(res =>{
            setMicrochipMfgList(res.data)
            console.log(res.data)
        }).catch(err=>{
            console.error(err.response.data.message)
            // alert("get data failed")
        })
    }

    function LoadContacts (){
        API.getExtContact().then(res =>{
            setOrigins(res.data)
            // console.log(res.data)
        }).catch(err=>{
            console.error(err.response.data.message)
            // alert("get data failed")
        })
    }

    const [dogIntakeData, setDogIntakeData] = useState({})
    const createDogInputChange = event =>{
        const {name, value} = event.target
        setDogIntakeData({
            ...dogIntakeData,
            [name]: value
        })
    }

    const handleDogIntakeFormSubmit = event =>{
        event.preventDefault();
        const newDog = {...dogIntakeData, 
            ...isPurebredData, 
            ...genderData,
            ...sizeData,
            ...coatColorData, 
            ...originContactData,
            DogStatusId: dogStatusNew
        }
        console.log(originContactData, addedExternalContactData, addedAddressData)
        if(!originContactData.originId){
            newDog.origin = {...addedExternalContactData, Address: addedAddressData}
        }
        console.log(newDog)
        props.submitFunction(newDog)
            .then(res =>{
            console.log(res.data)
            setDogIntakeData({})
            setIsPurebredData({})
            setGenderData({})
            setSizedata({})
            setCoatColorData({})
            setOriginContactData({})
            setAddedExternalContactData({})
            setAddedAddressData({})
            setDogStatusNew(0)
            window.location = "/dogView/" + (dogId || res.data.id)
        }).catch(err=>{
            console.error(err)
            // alert("Create dog failed")
        })
    }

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
                <TextField className={classes.formControl} type="number" variant="outlined" label="Pull Cost" InputLabelProps={{shrink: true}} onChange={createDogInputChange} value={dogIntakeData.pullCost} name="pullCost"/>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <TextField className={classes.formControl} variant="outlined" label="Behavioral Issues" InputLabelProps={{shrink: true}} onChange={createDogInputChange} value={dogIntakeData.behaviorialIssues} name="behaviorialIssues"/>
            </Grid>
            <Grid item container style={{marginTop: "1em"}} align="center" direction="column">
                <Grid item>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="originId">Dog Origin</InputLabel>
                    <Select
                    labelId="originId"
                    id="originId"
                    onChange={handleOriginContact}
                    value={originContactData.originId}
                    name="originId"
                    label="Dog Origin"
                    InputLabelProps={{shrink: true}}
                    >
                        <MenuItem value={0}>
                            <em>Select contact</em>
                        </MenuItem>
                    {origins.map((origin)=>(
                        <MenuItem value={origin.id}>{origin.fullName}</MenuItem>
                    ))}
                    </Select>
                    </FormControl>
                </Grid>
                {/* THIS IS ON PURPOSE! Coming back soon to repair */}
                <Grid item>
                    <Typography>Or</Typography>
                    <Button variant="contained" color="secondary" onClick={onClick}>Add external contact</Button>
                </Grid>
            </Grid>
            {contactFormVis ? null : 
                <React.Fragment>
                    <Grid item style={{marginTop: "3em"}}>
                        <Typography variant="h5">External Contact</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item container style={{marginTop: "1em"}}>
                        <Grid item container justify="space-evenly">
                            <TextField variant="outlined" label="Name" InputLabelProps={{shrink: true}} style={{marginTop: "1em"}} onChange={handleAddedExternalContactChange} value={addedExternalContactData.fullName} name="fullName"/>
                            <TextField variant="outlined" label="Email" InputLabelProps={{shrink: true}} style={{marginTop: "1em"}} onChange={handleAddedExternalContactChange} value={addedExternalContactData.email} name="email"/>
                            <TextField variant="outlined" label="Phone" InputLabelProps={{shrink: true}} style={{marginTop: "1em"}} onChange={handleAddedExternalContactChange} value={addedExternalContactData.phone} name="phone"/>
                            <TextField variant="outlined" label="Type" InputLabelProps={{shrink: true}} style={{marginTop: "1em"}} onChange={handleAddedExternalContactChange} value={addedExternalContactData.contactType} name="contactType"/>
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" style={{marginTop: "2em"}} xs={10} sm={10} md={6} lg={6}>
                        <Typography>Address:</Typography>
                        <TextField label="Street" InputLabelProps={{shrink: true}} onChange={handleExternalAddress} value={addedAddressData.street} name="street"/>
                        <TextField label="City" InputLabelProps={{shrink: true}} onChange={handleExternalAddress} value={addedAddressData.city} name="city"/>
                        <TextField label="State" InputLabelProps={{shrink: true}} onChange={handleExternalAddress} value={addedAddressData.state} name="state"/>
                        <TextField label="Zip" InputLabelProps={{shrink: true}} onChange={handleExternalAddress} value={addedAddressData.zip5} name="zip5"/>
                    </Grid>
                </React.Fragment>
            }
            {/* <Grid item style={{marginTop: "1em"}}>
                <Button variant="contained" color="secondary">Add external contact</Button>
            </Grid> */}
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
                <Typography variant="h4">Medical Issues</Typography>
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
                <TextField className={classes.largeTextfield} label="Known medical issues" InputLabelProps={{shrink: true}} rows={6} multiline variant="outlined" onChange={createDogInputChange} value={dogIntakeData.medicalIssues} name="medicalIssues"/>
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
                        <TextField variant="outlined" label="Name" InputLabelProps={{shrink: true}} onChange={createDogInputChange} value={dogIntakeData.name} name="name"/>
                    </Grid>
                    <Grid item container className={classes.formItem} direction="column">
                        <InputLabel id="birthday">Date of birth</InputLabel>
                        <TextField type="date" variant="outlined" labelId="birthday" InputLabelProps={{shrink: true}} onChange={createDogInputChange} value={dogIntakeData.dob} name="dob"/>
                    </Grid>
                        <Grid item style={{marginTop: "1em"}}>
                            <div>
                                <FormControl variant="outlined" style={{minWidth: 195, marginBottom: "1em"}}>
                                    <InputLabel id="gender">Gender</InputLabel>
                                    <Select
                                        labelId="gender"
                                        id="gender"
                                        onChange={handleGenderChange}
                                        value={genderData.gender}
                                        name="gender"
                                        label="Gender"
                                        InputLabelProps={{shrink: true}}
                                    >
                                        <MenuItem value="female">Female</MenuItem>
                                        <MenuItem value="male">Male</MenuItem>
                                    </Select>
                                </FormControl>

                            </div>
                        </Grid>
                    <Grid item container className={classes.numberItem}>
                        <Grid item style={{marginTop: "1em"}}>
                            <div>
                                <FormControl variant="outlined" style={{minWidth: 195, marginBottom: "1em"}}>
                                    <InputLabel id="microchipMfgList">Microchip Company</InputLabel>
                                    <Select
                                        labelId="microchipMfgList"
                                        id="microchipMfgList"
                                        label="Microchip Manufacturer"
                                        InputLabelProps={{shrink: true}}
                                        name="microchipMfgList"
                                    >
                                        {microchipMfgList.map((mfg)=><MenuItem value={mfg.id}>{mfg.name}</MenuItem>)}
                                    </Select>
                                </FormControl>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item container className={classes.numberItem}>
                        <TextField type="number" variant="outlined" label="Microchip ID" InputLabelProps={{shrink: true}} onChange={createDogInputChange} value={dogIntakeData.microchipId} name="microchipId"/>
                    </Grid>
                    <Grid item container className={classes.formItem}>
                        <TextField type="number" variant="outlined" label="ASF ID" InputLabelProps={{shrink: true}} onChange={createDogInputChange} value={dogIntakeData.asfId} name="asfId"/>
                    </Grid>
                    {/* <Grid item container className={classes.formItem}>
                        <TextField rows={4} multiline variant="outlined" label="About" onChange={e => setAbout(e.target.value)}/>
                    </Grid> */}
                </div>
            </Grid>
            
        </Grid>
        
        
        <BreedEdit 
        purebredChange={handlePurebredChange} 
        purebredValue={isPurebredData.isPurebred} 
        dogInputChange={createDogInputChange} 
        secondBreedValue={dogIntakeData.secondaryBreed}
        coatColorChange={handleCoatColorChange}
        coatColorValue={coatColorData.coat}
        weightValue={dogIntakeData.weight}
        sizeChange={handleSizeChange}
        sizeValue={sizeData.size}
        originList= {origins.map((origin)=>(
            <MenuItem value={origin.id}>{origin.fullName}</MenuItem>
        ))}
        />

        {window.location.href.includes("create") ? null : 
        <DogStatusEdit
        statusLabel={(dogStatusList.find((status)=>status.id === dogIntakeData.DogStatusId)|| {}).name}
        statusValue={dogStatusNew}
        statusChange={handleStatusChange}
        statusList ={dogStatusList.map((status)=><MenuItem value={status.id}>{status.name}</MenuItem>)}
        />}

        <IntakeDetailsEdit
        dogInputChange={createDogInputChange}
        pullCostValue={dogIntakeData.pullCost}
        behaviorValue={dogIntakeData.behaviorialIssues}
        originContactChange={handleOriginContact}
        originValue={originContactData.originId}
        addContactChange={handleAddedExternalContactChange}
        fullNameValue={addedExternalContactData.fullName}
        emailValue={addedExternalContactData.email}
        phoneValue={addedExternalContactData.phone}
        typeValue={addedExternalContactData.contactType}
        />
        {window.location.href.includes("create") ? intakeDetails : null}

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