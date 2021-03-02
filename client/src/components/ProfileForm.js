import React, {useState, useEffect, Component} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";

import PhoneInput from "../components/PhoneInput";
import Image from "../components/Image";
import AddButton from "../components/AddButton";
import EditButton from "../components/EditButton";
import MultiLineText from "../components/MultiLineText";
import SaveButton from "../components/SaveButton";
import RoleTitles from "../components/RoleTitles";
import MultiSelectChips from "../components/MultiSelectChips";
import HoldCheckbox from "../components/HoldCheckbox";

import ashley from "../assets/ashley.jpg";

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
    const admin = true;
    const roles = [{role: "Adopter"}, {role: "Foster"}];
    const names = ["Adopter", "Foster", "Regional", "Volunteer", "Rescuer", "Transporter", "Placement"]

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [userEmail, setuserEmail] = useState();
    const [userPhone, setUserPhone] = useState();
    const [city, setCity] = useState();
    const [location, setLocation] = useState();
    const [about, setAbout] = useState(" ");
    const [max, setMax] = useState(0);
    const [current, setCurrent] = useState(0);
    const [available, setAvailable] = useState(0);
    const [ref1Name, setRef1Name] = useState();
    const [ref1Phone, setRef1Phone] = useState();
    const [ref1Email, setRef1Email] = useState();
    const [ref1Notes, setRef1Notes] = useState();
    const [ref2Name, setRef2Name] = useState();
    const [ref2Phone, setRef2Phone] = useState();
    const [ref2Email, setRef2Email] = useState();
    const [ref2Notes, setRef2Notes] = useState();
    const [ref3Name, setRef3Name] = useState();
    const [ref3Phone, setRef3Phone] = useState();
    const [ref3Email, setRef3Email] = useState();
    const [ref3Notes, setRef3Notes] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        console.log(firstName, lastName, userEmail, userPhone, city, location, about, max, current, available, ref1Name, ref1Phone, ref1Email, ref1Notes, ref2Name, ref2Phone, ref2Email, ref2Notes, ref3Name, ref3Phone, ref3Email, ref3Notes)
    }

    const roleEdit = (
        <Grid item container className={classes.itemContainer}>
        <Grid container style={{marginTop: "1em"}}>
            <Grid item>
                <Typography variant="h4">Role Title</Typography>
            </Grid>
        </Grid>
        <Grid container justify="space-between">
            <Grid item style={{marginTop: "1em"}}>
                {roles.map((role)=> (
                    <RoleTitles
                    label={role.role}
                    />
                ))}
            </Grid>
            <Grid item>
                <MultiSelectChips names={names} title="Add Role(s)"/>
            </Grid>
        </Grid>
    </Grid>
    )

    const status

    const capacity = (

        <Grid container direction="row" justify={"space-between"} style={{marginBottom: "5em"}}>
            <Grid item container xs={10} sm={6} md={6} lg={6} style={{marginTop: "3em"}} direction="column">
                <Grid item>
                    <Typography variant="h4">Capacity</Typography>
                    <Divider/>
                </Grid>
                <Grid item container>
                    <Grid item xs={6} sm={6} md={8} lg={6}>
                        <Typography style={{marginTop: "1em"}}>Max Capacity:</Typography>
                        <Typography style={{marginTop: "1.5em"}}>Dogs in care:</Typography>
                        <Typography style={{marginTop: "2em"}}>Available space:</Typography>
                    </Grid>
                    <Grid item xs={6} sm={6} md={8} lg={6}>
                        <div>
                        <TextField type="number" style={{marginTop: "1em"}} onChange={e => setMax(e.target.value)}></TextField>
                        <TextField type="number" style={{marginTop: "1em"}} onChange={e => setCurrent(e.target.value)}></TextField>
                        <TextField type="number" style={{marginTop: "1em"}} onChange={e => setAvailable(e.target.value)}></TextField>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={10} sm={6} md={6} lg={6} style={{marginTop: "3em"}} direction="column">
                <Grid item>
                <Typography variant="h4">Cares for:</Typography>
                    <Divider/>
                </Grid>
                <Grid item container style={{marginTop: "3em"}}>
                    <Grid item>
                        <MultiSelectChips names={names} title="Select all that apply"/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )

    const references = (
        <Grid item container justify="space-evenly" className={classes.references}>
            <Grid item style={{marginTop: "1em", marginBottom: "5em"}}> 
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Reference #1
                        </Typography>
                        <div>
                        <TextField variant="outlined" label="Name" onChange={e => setRef1Name(e.target.value)}/>
                        <TextField type="number" variant="outlined" label="Phone" onChange={e => setRef1Phone(e.target.value)}/>
                        <TextField variant="outlined" label="Email" onChange={e => setRef1Email(e.target.value)}/>
                        </div>
                    </CardContent>
                        {admin ? <CardContent><HoldCheckbox label="Contaced successfully"/></CardContent> : null}
                        {admin ? <CardContent><HoldCheckbox label="Approved"/></CardContent> : null}
                        {admin ? <CardContent>Notes:</CardContent> : null}
                    <CardContent>
                        {admin ? <div><TextField rows={4} multiline variant="outlined" label="New notes" onChange={e => setRef1Notes(e.target.value)}/></div> : null}
                    </CardContent>
                </Card>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Reference #2
                        </Typography>
                        <div>
                        <TextField variant="outlined" label="Name" onChange={e => setRef2Name(e.target.value)}/>
                        <TextField type="number" variant="outlined" label="Phone" onChange={e => setRef2Phone(e.target.value)}/>
                        <TextField variant="outlined" label="Email" onChange={e => setRef2Email(e.target.value)}/>
                        </div>
                    </CardContent>
                        {admin ? <CardContent><HoldCheckbox label="Contaced successfully"/></CardContent> : null}
                        {admin ? <CardContent><HoldCheckbox label="Approved"/></CardContent> : null}
                        {admin ? <CardContent>Notes:</CardContent> : null}
                    <CardContent>
                        {admin ? <div><TextField rows={4} multiline variant="outlined" label="New notes" onChange={e => setRef2Notes(e.target.value)}/></div> : null}
                    </CardContent>
                </Card>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            Reference #3
                        </Typography>
                        <div>
                        <TextField variant="outlined" label="Name" onChange={e => setRef3Name(e.target.value)}/>
                        <TextField type="number" variant="outlined" label="Phone" onChange={e => setRef3Phone(e.target.value)}/>
                        <TextField variant="outlined" label="Email" onChange={e => setRef3Email(e.target.value)}/>
                        </div>
                    </CardContent>
                        {admin ? <CardContent><HoldCheckbox label="Contaced successfully"/></CardContent> : null}
                        {admin ? <CardContent><HoldCheckbox label="Approved"/></CardContent> : null}
                        {admin ? <CardContent>Notes:</CardContent> : null}
                    <CardContent>
                        {admin ? <div><TextField rows={4} multiline variant="outlined" label="New notes" onChange={e => setRef3Notes(e.target.value)}/></div> : null}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )

    return (
        <form onSubmit={handleSubmit}>
        <Grid item container className={classes.itemContainer}>
        <Grid container justify="space-evenly" className={classes.picContainer}>
            <Grid item>
                <Image alt={"Ashley"} pic={ashley} />
                <EditButton buttonText="Change Photo" toLink="/"/>
            </Grid>
            <Grid item>
                <div className={classes.form}>
                    <Grid item container className={classes.formItem}>
                        <TextField variant="outlined" label="First Name" onChange={e => setFirstName(e.target.value)}/>
                    </Grid>
                    <Grid item container className={classes.formItem}>
                        <TextField variant="outlined" label="Last Name" onChange={e => setLastName(e.target.value)}/>
                    </Grid>
                    <Grid item container className={classes.formItem}>
                        <TextField variant="outlined" label="Phone" onChange={e => setUserPhone(e.target.value)}/>
                    </Grid>
                    <Grid item container className={classes.formItem}>
                        <TextField type="email" variant="outlined" label="Email" onChange={e => setuserEmail(e.target.value)}/>
                    </Grid>
                    <Grid item container className={classes.formItem} direction="column">
                        <InputLabel id="birthday">Date of birth</InputLabel>
                        <TextField type="date" variant="outlined" labelId="birthday" name="dob"/>
                    </Grid>
                </div>
            </Grid>
            {admin ? roleEdit : null}
        </Grid>
        {capacity}
        <Grid item>
            <Typography variant="h4">References</Typography>
            <Divider/>
        </Grid>
        {references}
        <Grid item container className={classes.formItem} justify={"flex-end"}>
            <SaveButton buttonText="Save Changes"/>
        </Grid>
    </Grid>
    </form>
    )
}