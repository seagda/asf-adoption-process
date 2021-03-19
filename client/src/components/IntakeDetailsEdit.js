import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

import SingleSelect from "../components/SingleSelect";
import UploadButton from "../components/UploadButton";


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

export default function IntakeDetailsEdit(props){
    const classes = useStyles();

    const [contactFormVis, setContactFormVis] = useState(true)
    const onClick = () => setContactFormVis(false)

    const [selectData, setSelectData] = useState({
        behaviorIssues: 1
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
            behaviorIssues: props.dogData?.behaviorIssues
        })
    },[props.dogData?.behaviorIssues])

    return(
        <Grid item container className={classes.itemContainer}>
        <Grid container>
            <Grid item style={{marginTop: "3em"}}>
                <Typography variant="h4">Intake Details</Typography>
                <Divider/>
            </Grid>
        </Grid>
        <Grid container justify="space-evenly">
            <Grid item style={{marginTop: "1em"}}>
                <TextField className={classes.formControl} type="number" variant="outlined" label="Pull Cost" InputLabelProps={{shrink: true}} onChange={props.handleInputChange} value={props.dogData.pullCost} name="pullCost"/>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel shrink id="behaviorIssues">Behavior Issues?</InputLabel>
                    <Select
                    labelId="behaviorIssues"
                    id="behaviorIssues"
                    onChange={handleSelectChange}
                    value={selectData.behaviorIssues}
                    name="behaviorIssues"
                    label="Behavior Issues?"
                    >
                    <MenuItem disabled value={1}>Behavior Issues?</MenuItem>
                    <MenuItem value={0}>Yes</MenuItem>
                    <MenuItem value={1}>No</MenuItem>
                    </Select>
                    </FormControl>
                </div>
            </Grid>
            <Grid item container style={{marginTop: "1em"}} align="center" direction="column">
                <Grid item>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="OriginId">Dog Origin</InputLabel>
                    <Select
                    labelId="OriginId"
                    id="OriginId"
                    onChange={props.handleInputChange}
                    value={props.originContactData.id}
                    name="OriginId"
                    label="Dog Origin"
                    InputLabelProps={{shrink: true}}
                    >
                        <MenuItem value={0}>
                            <em>Select contact</em>
                        </MenuItem>
                    {props.originList}
                    </Select>
                    </FormControl>
                </Grid>


                {/* THIS IS ON PURPOSE! Coming back soon to repair */}
                {/* <Grid item>
                    <Typography>Or</Typography>
                    <Button variant="contained" color="secondary" onClick={onClick}>Add external contact</Button>
                </Grid> */}
            </Grid>
            {contactFormVis ? null : 
                <React.Fragment>
                    <Grid item style={{marginTop: "3em"}}>
                        <Typography variant="h5">External Contact</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item container style={{marginTop: "1em"}}>
                        <Grid item container justify="space-evenly">
                            <TextField variant="outlined" label="Name" InputLabelProps={{shrink: true}} style={{marginTop: "1em"}} onChange={props.addContactChange} value={props.fullNameValue} name="fullName"/>
                            <TextField variant="outlined" label="Email" InputLabelProps={{shrink: true}} style={{marginTop: "1em"}} onChange={props.addContactChange} value={props.emailValue} name="email"/>
                            <TextField variant="outlined" label="Phone" InputLabelProps={{shrink: true}} style={{marginTop: "1em"}} onChange={props.addContactChange} value={props.phoneValue} name="phone"/>
                            <TextField variant="outlined" label="Type" InputLabelProps={{shrink: true}} style={{marginTop: "1em"}} onChange={props.addContactChange} value={props.typeValue} name="contactType"/>
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" style={{marginTop: "2em"}} xs={10} sm={10} md={6} lg={6}>
                        <Typography>Address:</Typography>
                        <TextField label="Street" InputLabelProps={{shrink: true}} onChange={props.addressChange} value={props.streetValue} name="street"/>
                        <TextField label="City" InputLabelProps={{shrink: true}} onChange={props.addressChange} value={props.cityValue} name="city"/>
                        <TextField label="State" InputLabelProps={{shrink: true}} onChange={props.addressChange} value={props.stateValue} name="state"/>
                        <TextField label="Zip" InputLabelProps={{shrink: true}} onChange={props.addressChange} value={props.zipValue} name="zip5"/>
                    </Grid>
                </React.Fragment>
            }
            {/* <Grid item style={{marginTop: "1em"}}>
                <Button variant="contained" color="secondary">Add external contact</Button>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
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
}