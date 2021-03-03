import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import API from '../utils/API';

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
            marginLeft: "3.5em"
        }
    },
    itemContainer: {
        justifyContent: "center",
        paddingTop: "3em",
        paddingBottom: "1em",
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        }
    },
    form: {
        justifyContent: "space-evenly",
        [theme.breakpoints.down("sm")]:{
            padding: "1em"
        }
    },
    formItem: {
        marginBottom: "1em"
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
    addressItem: {
        minWidth: 250
    }
}))

export default function SignUp(){
    const classes = useStyles();

    const [signupFormData, setSignupFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: ""
    })

    const signupInputChange = event =>{
        const {name, value} = event.target
        setSignupFormData({
            ...signupFormData,
            [name]: value
        })
    }

    const [addressFormData, setAddressFormData] = useState({
        Address: {
            street: "",
            city: "",
            state: "",
            zip5: ""
        }
    })

    const handleAddressInputChange = event =>{
        const {name, value} = event.target
        setAddressFormData({
            ...addressFormData,
            [name]: value
        })
    }

    const handleSignupFormSubmit = event =>{
        event.preventDefault();
        API.signup({...signupFormData,
            ...addressFormData
        }).then(res =>{
            console.log(res.data)
            setSignupFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                phone: ""
            })
            setAddressFormData({
                Address: {
                    street: "",
                    city: "",
                    state: "",
                    zip5: ""
                }
            })
            window.location = "/signin"
        }).catch(err =>{
            console.error(err.response.data.message)
            alert("signup failed")
        })
    }

    return(
        <Grid container className={classes.mainContainer}>
            <Grid item container>
                <Grid item>
                    <Typography variant="h3" component="h4" gutterBottom align="center" color="primary">
                        Sign up
                    <Divider />
                    </Typography>
                </Grid>
            </Grid>
            <Paper>
            <form onSubmit={handleSignupFormSubmit}>
                <Grid item container className={classes.itemContainer}>
                    <Grid item container className={classes.form}>
                        {/* <div className={classes.form}> */}
                            <Grid item className={classes.formItem}>
                                <TextField variant="outlined" label="First Name" onChange={signupInputChange} value={signupFormData.firstName} name="firstName"/>
                            </Grid>
                            <Grid item className={classes.formItem}>
                                <TextField variant="outlined" label="Last Name" onChange={signupInputChange} value={signupFormData.lastName} name="lastName"/>
                            </Grid>
                            <Grid item className={classes.formItem}>
                                <TextField type="email" variant="outlined" label="Email" onChange={signupInputChange} value={signupFormData.email} name="email"/>
                            </Grid>
                            <Grid item className={classes.formItem}>
                                <TextField type="password" variant="outlined" label="Password" onChange={signupInputChange} value={signupFormData.password} name="password"/>
                            </Grid>
                            <Grid item className={classes.formItem}>
                                <TextField variant="outlined" label="Phone" onChange={signupInputChange} value={signupFormData.phone} name="phone"/>
                            </Grid>
                        {/* </div> */}
                    </Grid>
                    
                    <Grid item container style={{marginLeft: "1em"}} align="flext-start">
                        <Grid item>
                            <Typography variant="h7">Address</Typography>
                        </Grid>
                    </Grid>
                    <Grid item container className={classes.form}>
                            <Grid item className={classes.formItem}>
                                <TextField className={classes.addressItem} variant="outlined" label="Street" onChange={handleAddressInputChange} value={addressFormData.street} name="street"/>
                            </Grid>
                            <Grid item className={classes.formItem}>
                                <TextField className={classes.addressItem} variant="outlined" label="City" onChange={handleAddressInputChange} value={addressFormData.city} name="city"/>
                            </Grid>
                            <Grid item className={classes.formItem}>
                                <TextField className={classes.addressItem} variant="outlined" label="State" onChange={handleAddressInputChange} value={addressFormData.state} name="state"/>
                            </Grid>
                            <Grid item className={classes.formItem}>
                                <TextField className={classes.addressItem} variant="outlined" label="Zip" onChange={handleAddressInputChange} value={addressFormData.zip5} name="zip5"/>
                            </Grid>
                    </Grid>
        
                    <Grid item container className={classes.formItem} justify={"center"}>
                        <Button type="submit" color="secondary" variant="contained">Sign Up</Button>
                    </Grid>
                </Grid>
            </form>
            </Paper>
        </Grid>
    )
}