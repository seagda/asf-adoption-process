import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useState, useEffect, createRef } from "react";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import API from '../utils/API';
import BehaviorCard from '../components/BehaviorCards';
import SimpleAccordion from '../components/SimpleAccordion';
import UploadFiles from '../components/UploadFiles';
import FancyCard from '../components/FancyCard';
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
            .then(res => {setDogDocsState(res.data) 
                console.log(res.data)}),
        API.getSingleDogData(id)
            .then(res => {setDogDataState(res.data)
                console.log(res.data)}),
        API.getBehaviorAnswers(id)
            .then(res => {setDogAssessmentsState(res.data.reverse())
                console.log(res.data)}),
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
                <FancyCard 
                    dogName={dogData.name} 
                    dogStatus={dogData.DogStatus?.name} 
                    currentlyWithFirstName={dogData.currentlyWith?.firstName} 
                    currentlyWithLastName={dogData.currentlyWith?.lastName} 
                    currentlyWithEmail={dogData.currentlyWith?.email} 
                    profilePhoto={dogData.DogPhotos?.[0]?.url} 
                    adminNotes={dogData.adminNotes}
                    currentScore={Object.keys(dogAssessments?.[0]?.response || {}).reduce( (sum, key) => sum+parseFloat(dogAssessments?.[0]?.response[key]|| 0),0)}
                    totalPossible={Object.keys(dogAssessments?.[0]?.response ||{}).length*5}
                    />
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
                                <BehaviorCard 
                                date={assessment?.date} 
                                firstName={assessment.User.firstName} 
                                lastName={assessment.User.lastName}  
                                id={assessment.id}
                                currentScore={Object.keys(assessment?.response).reduce( (sum, key) => sum+parseFloat(assessment?.response[key]|| 0),0)}
                                totalPossible={Object.keys(assessment?.response).length*5}/>
                            )
                        })}
                        </Grid>
                    </React.Fragment>
                ):null}
            </Grid>
            
            <Grid container>
            <Grid item xs={12} s={10}>
                <Typography variant="h5" component="h6" gutterBottom color="primary">
                    Documents and Medical Records
                    <Divider />
                </Typography>
            </Grid>
                <Grid item xs={12} s={12} m={4} lg={4} >
                    <UploadFiles handleSubmit={handleFileSubmit} buttonText="Select Files" multiple fileInput={fileInput}/>
                </Grid>
                <Grid item s={12} m={8} lg>
                    {dogDocs ? (
                    <React.Fragment>
                        {dogDocs.map(doc => {
                            return (
                            <Grid item xs={12} style={{margin: "0.5em"}}>
                                <SimpleAccordion download={() => download(doc.id)} name={doc.name} createdAt={doc.createdAt} />
                            </Grid>
                            )
                        })}
                    </React.Fragment>
                    ):null}
                </Grid>
            </Grid>
        </Grid>
    )
}