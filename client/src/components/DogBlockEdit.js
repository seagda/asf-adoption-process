import React, {useState, useEffect, Component} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import MenuItem from '@material-ui/core/MenuItem';
import API from "../utils/API";

import SaveButton from "../components/SaveButton";
import DogStatusEdit from "../components/DogStatusEdit";
import IntakeDetailsEdit from "../components/IntakeDetailsEdit";
import HealthRecordEdit from "../components/HealthRecordEdit";
import BreedEdit from "../components/BreedEdit";
import DogMainInfoEdit from "../components/DogMainInfoEdit";


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

    const [dogStatusList, setDogStatusList] = useState([]);

    const [microchipMfgList, setMicrochipMfgList] = useState([]);
    
    const [origins, setOrigins] = useState([])

    const [dogId, setDogId] = useState();
    console.log(dogId)



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
            console.log(res.data.map((mfg)=>`<MenuItem value={${mfg.id}}>${mfg.name}</MenuItem>`).join(",\n"))
            
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
            ...originContactData
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
            setOriginContactData({})
            setAddedExternalContactData({})
            setAddedAddressData({})
            window.location = "/dogView/" + (dogId || res.data.id)
        }).catch(err=>{
            console.error(err)
            // alert("Create dog failed")
        })
    }


    return (
        <form onSubmit={props.submitFunction}>
        <Grid item container className={classes.itemContainer}>
            <DogMainInfoEdit
            handleInputChange={props.handleInputChange}
            dogData={props.dogData}
            mfgList={microchipMfgList.map((mfg)=><MenuItem value={mfg.id}>{mfg.name}</MenuItem>)}
        />
        
        
        <BreedEdit
        handleInputChange={props.handleInputChange}
        dogData={props.dogData} 
        />

        {window.location.href.includes("create") ? null : 
        <DogStatusEdit
        handleInputChange={props.handleInputChange}
        dogData={props.dogData}
        statusLabel={(dogStatusList.find((status)=>status.id === props.dogData?.DogStatusId)|| {}).name}
        statusList ={dogStatusList.map((status)=><MenuItem value={status.id}>{status.name}</MenuItem>)}
        />}


        {window.location.href.includes("create") ? 
        <IntakeDetailsEdit
        handleInputChange={props.handleInputChange}
        dogData={props.dogData}
        originContactData={props.originContactData}
        originList={props.originList}

        // dogInputChange={createDogInputChange}
        // originContactChange={handleOriginContact}
        addContactChange={handleAddedExternalContactChange}
        fullNameValue={addedExternalContactData.fullName}
        emailValue={addedExternalContactData.email}
        phoneValue={addedExternalContactData.phone}
        typeValue={addedExternalContactData.contactType}
        addressChange={handleExternalAddress}
        streetValue={addedAddressData.street}
        cityValue={addedAddressData.city}
        stateValue={addedAddressData.state}
        zipValue={addedAddressData.zip5}
        // originList= {origins.map((origin)=>(
        //     <MenuItem value={origin.id}>{origin.fullName}</MenuItem>
        // ))}
        /> : null}

        <HealthRecordEdit
        handleInputChange={props.handleInputChange}
        dogData={props.dogData}
        dogInputChange={createDogInputChange}
        medIssuesValue={dogIntakeData.medicalIssues}
        />
        {/* <RecordCards/> */}
        
        <Grid item container className={classes.formItem} justify={"flex-end"}>
            <SaveButton buttonText="Save Changes"/>
        </Grid>
    </Grid>
    </form>
    )
}