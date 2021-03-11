import React from 'react';
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
                <TextField className={classes.formControl} type="number" variant="outlined" label="Pull Cost" InputLabelProps={{shrink: true}} onChange={props.dogInputChange} value={props.pullCostValue} name="pullCost"/>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <TextField className={classes.formControl} variant="outlined" label="Behavioral Issues" InputLabelProps={{shrink: true}} onChange={props.dogInputChange} value={props.behaviorValue} name="behaviorialIssues"/>
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
            <Grid item style={{marginTop: "1em"}}>
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
            </Grid>
        </Grid>
    </Grid>
    )
}