import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useState, useEffect, createRef } from "react";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import API from '../utils/API';
import SwipeBar from '../components/SwipeBar';
import BehaviorCard from '../components/BehaviorCards';
import UploadFiles from '../components/UploadFiles';
import {useParams} from 'react-router-dom';
import FileDownload from 'js-file-download';

const useStyles=makeStyles(theme => ({
    mainContainer: {
        marginLeft: theme.spacing(35),
        marginTop: theme.spacing(13),
        width: "70%",
        [theme.breakpoints.down("md")]:{
            width: "80%"
        },
        [theme.breakpoints.down("sm")]:{
            width: "100%"
        },
        [theme.breakpoints.down("xs")]:{
            spacing: theme.spacing(2),
            marginLeft: 0
        }
    }
}))

export default function DogDossierDocs(){
    const classes = useStyles();

    const [dogDossierDocs, setDogDossierDocsState] = useState([]);
    const {id} = useParams();
    const fileInput = createRef();

    const handleFileSubmit = () => {
        API.createDocuments(fileInput.current.files, id).then(console.log).catch(console.error)
    }

    // request for behavioral assessments
    // seperate request for the docs (array name, id and no link / hit another route to recieve the doc)
    //request for dog data / general dossier 
  
    function loadDogDossierDocs() {
    API.getDogDossierDocs(id)
        .then(res => {
        console.log(res.data)
        setDogDossierDocsState(res.data)
        
        })
        .catch(err => console.log(err));
    };

    useEffect(() => {
        loadDogDossierDocs()
    }, [])

    function download(docId) {
        API.getDocument(docId).then(res => {
            FileDownload(res.data, res.headers["content-disposition"].match(/(?:filename=)(.+)$/i)[1])
        }).catch(console.error);
    }

    const userString = localStorage.getItem("user")
    if(!userString){
        window.location = "/"
    }
    const user = JSON.parse(userString)


    return(
        <Grid container className={classes.mainContainer} justify="space-evenly" spacing={4}>
            <Grid item xs={12}>
                <Typography variant="h3" component="h4" gutterBottom align="center" color="primary">
                    Documents and Development
                    <Divider />
                </Typography>
                <SwipeBar />
            </Grid>
            <Grid item xs={12} s={10}>
                <Typography variant="h5" component="h6" gutterBottom color="primary">
                    Behavior Assessments
                    <Divider />
                </Typography>
                <UploadFiles handleSubmit={handleFileSubmit} buttonText="Select Files" multiple fileInput={fileInput}/>
            </Grid>
            <Grid item xs={12} s={10}>
                <Typography variant="h5" component="h6" gutterBottom color="primary">
                    Documents
                    <Divider />
                </Typography>
                {/* TODO: make this look good */}
                {dogDossierDocs.map(doc => <p key={doc.id} onClick={() => download(doc.id)}>{doc.name}, {doc.createdAt}</p>)}
            </Grid>

            {/* {dashboardData.myDogs && dashboardData.myDogs.length ? (
                <React.Fragment>
                    <Grid item xs={12} s={10}>
                        <Typography variant="h5" component="h6" gutterBottom color="primary">
                            My Dogs
                            <Divider />
                        </Typography>
                    </Grid>
                    <Grid container className={classes.cardContainer} justify="center">
                            {dashboardData.myDogs.map(dog =>{
                                return (
                                    <Grid item xs={10} s={10} m={6} lg={3}>
                                        <BehaviorCard id={dog.id} name={dog.name} gender={dog.gender} dob={dog.dob} image={dog.DogPhotos[0].url} />
                                    </Grid>
                                )
                            })}    
                    </Grid>
                </React.Fragment>
                    ):null}  */}
        </Grid>
    )
}