import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useState, useEffect, createRef } from "react";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import API from '../utils/API';
import SwipeBar from '../components/SwipeBar';
import BehaviorCard from '../components/BehaviorCards';
import SimpleAccordion from '../components/SimpleAccordion';
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

    const [dogData, setDogDataState] = useState({})
    const [dogDocs, setDogDocsState] = useState([]);
    const [dogAssessments, setDogAssessmentsState] = useState([]);
    const {id} = useParams();
    const fileInput = createRef();

    const handleFileSubmit = () => {
        API.createDocuments(fileInput.current.files, id).then(console.log).catch(console.error)
    }

    useEffect(() => Promise.all([
        API.getDogDocs(id)
            .then(res => setDogDocsState(res.data)),
            console.log(dogDocs),
        API.getSingleDogData(id)
            .then(res => setDogDataState(res.data)),
            console.log(dogData),
        API.getBehaviorAnswers(id)
            .then(res => setDogAssessmentsState(res.data)),
            console.log(dogAssessments),
    ]).catch(console.error), [])

    function download(docId) {
        API.getDocument(docId).then(res => {
            const fileDownload = FileDownload(res.data, res.headers["content-disposition"].match(/(?:filename=)(.+)$/i)[1])
            console.log(fileDownload)
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
                <SwipeBar
                    dogStatus={dogData.DogStatus?.name} 
                    currentlyWithFirstName={dogData.currentlyWith?.firstName} 
                    currentlyWithLastName={dogData.currentlyWith?.lastName} 
                    currentlyWithEmail={dogData.currentlyWith?.email} 
                    // currentScore={} 
                    // lowScores={} 
                    aboutDog={dogData.aboutDog} 
                    adminNotes={dogData.adminNotes}>
                </SwipeBar>
            </Grid>
            <Grid item xs={12} s={10}>
                <Typography variant="h5" component="h6" gutterBottom color="primary">
                    Behavior Assessments
                    <Divider />
                </Typography>
                {dogAssessments ? (
                <React.Fragment>
                    <Grid container>
                    {dogAssessments.map(assessment => {
                        return (
                            <BehaviorCard date={assessment.date} firstName={assessment.User.firstName} lastName={assessment.User.lastName}  />
                        )
                    })}
                    </Grid>
                </React.Fragment>
                ):null}
            </Grid>
            
            <Grid item xs={12} s={10}>
                <Typography variant="h5" component="h6" gutterBottom color="primary">
                    Documents and Medical Records
                    <Divider />
                </Typography>
                <Grid item xs={3}>
                    <UploadFiles handleSubmit={handleFileSubmit} buttonText="Select Files" multiple fileInput={fileInput}/>
                </Grid>
                <Grid item xs={9} s={8}>
                    {dogDocs ? (
                    <React.Fragment>
                        <Grid container>
                        {dogDocs.map(doc => {
                            return (
                                <SimpleAccordion name={doc.name} createdAt={doc.createdAt} />
                            )
                        })}
                        </Grid>
                    </React.Fragment>
                    ):null}
                </Grid>
            </Grid>
        </Grid>
    )
}