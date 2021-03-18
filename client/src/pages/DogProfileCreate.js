import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import SaveButton from "../components/SaveButton";
import API from "../utils/API";
import MenuItem from "@material-ui/core/MenuItem";

import DogBlockEdit from "../components/DogBlockEdit";
import DogStatusEdit from "../components/DogStatusEdit";

const useStyles=makeStyles(theme => ({
    mainContainer: {
        marginLeft: theme.spacing(35),
        marginTop: theme.spacing(13),
        marginBottom: "5em",
        width: "70%",
        [theme.breakpoints.down("md")]:{
            width: "80%"
        },
        [theme.breakpoints.down("sm")]:{
            width: "80%"
        },
        [theme.breakpoints.down("xs")]:{
            spacing: theme.spacing(2),
            marginLeft: "3em"
        }
    },
    formItem: {
        marginBottom: "1em"
    }
}))

export default function DogProfileCreate(){
    const classes = useStyles();

    // let {id} = useParams();
    const [dogData, setDogData] = useState({})
    const [originContactData, setOriginContactData] = useState({});
    const [origins, setOrigins] = useState([])

    useEffect(()=>{
        LoadContacts();
    },[])

    function LoadContacts (){
        API.getExtContact().then(res =>{
            setOrigins(res.data)
            // console.log(res.data)
        }).catch(err=>{
            console.error(err.response.data.message)
            // alert("get data failed")
        })
    }

    const handleInputChange=({target})=>{
        setDogData({
            ...dogData,
            [target.name]: target.value
        })
        setOriginContactData({
            ...originContactData,
            [target.name]: target.value
        })
    }

    const submitFunction = (event)=>{
        event.preventDefault();
        const newDog = {
            ...dogData,
            ...originContactData
        }
        API.createDog(newDog).then(res=>{
            setDogData({})
            window.location = `/`
        }).catch(err=>{
            console.error(err.response.data.message)
        })
    }

    return(
        <Grid container className={classes.mainContainer}>
            <DogBlockEdit 
            originContactData={originContactData} 
            handleInputChange={handleInputChange} 
            dogData={{dogData}} 
            submitFunction={submitFunction} 
            originList= {origins.map((origin)=>(
                <MenuItem value={origin.id}>{origin.fullName}</MenuItem>
            ))}
            />
            {/* <DogStatusEdit/> */}
        </Grid>
    )
}