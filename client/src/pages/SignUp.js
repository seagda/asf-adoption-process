import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

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
    }
}))

export default function SignUp(){
    const classes = useStyles();

    // const [firstName, setFirstName] = useState();
    // const [lastName, setlastName] = useState();
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    // const [phone, setPhone] = useState();

    const [signupFormData, setSignupFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phone: 1
    })

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     console.log(firstName, lastName, email, password, phone)
    // }

    const signupInputChange = event =>{
        const {name, value} = event.target
        setSignupFormData({
            ...signupFormData,
            [name]: value
        })
    }

    const handleSignupFormSubmit = event =>{
        event.preventDefault();
        API.signup(signupFormData).then(res =>{
            console.log(res.data)
            setSignupFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                phone: 1
            })
        }).catch(err =>{
            alert("signup failed")
        })
    }

    return(
        <Grid container className={classes.mainContainer}>
            <Paper>
            <form onSubmit={handleSignupFormSubmit}>
                <Grid item container className={classes.itemContainer}>
                    <Grid item>
                        <div className={classes.form}>
                            <Grid item container className={classes.formItem}>
                                <TextField variant="outlined" label="First Name" onChange={signupInputChange} value={signupFormData.firstName} name="firstName"/>
                            </Grid>
                            <Grid item container className={classes.formItem}>
                                <TextField variant="outlined" label="Last Name" onChange={signupInputChange} value={signupFormData.lastName} name="lastName"/>
                            </Grid>
                            <Grid item container className={classes.formItem}>
                                <TextField type="email" variant="outlined" label="Email" onChange={signupInputChange} value={signupFormData.email} name="email"/>
                            </Grid>
                            <Grid item container className={classes.formItem}>
                                <TextField type="password" variant="outlined" label="Password" onChange={signupInputChange} value={signupFormData.password} name="password"/>
                            </Grid>
                            <Grid item container className={classes.formItem}>
                                <TextField variant="outlined" type="number" label="Phone" onChange={signupInputChange} value={signupFormData.phone} name="phone"/>
                            </Grid>
                        </div>
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