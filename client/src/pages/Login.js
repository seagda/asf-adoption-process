import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import API from "../utils/API";

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
        paddingRight: "3em",
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

export default function Login(){
    const classes = useStyles();

    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: ""
    })

    const loginInputChange = event =>{
        const {name, value} = event.target
        setLoginFormData({
            ...loginFormData,
            [name]: value
        })
    }

    const handleLoginFormSubmit = event =>{
        event.preventDefault();
        API.login(loginFormData).then(res =>{
            console.log(res.data)
            setLoginFormData({
                email: "",
                password: ""
            })
<<<<<<< HEAD
            localStorage.setItem("user", JSON.stringify(res.data))
=======
            localStorage.setItem("user", res.data)
>>>>>>> hs-dashboards-part5
            window.location ="/My-Profile"
        }).catch(err =>{
            alert("login failed")
            console.log(err.response.data.message)
        })
    }

    return(
        <Grid container className={classes.mainContainer}>
            <Paper>
            <form onSubmit={handleLoginFormSubmit}>
                <Grid item container className={classes.itemContainer}>
                    <Grid item className={classes.form}>
                            <Grid item container className={classes.formItem}>
                                <TextField type="email" variant="outlined" label="Email" onChange={loginInputChange} value={loginFormData.email} name="email"/>
                            </Grid>
                            <Grid item container className={classes.formItem}>
                                <TextField variant="outlined" type="password" label="Password" onChange={loginInputChange} value={loginFormData.password} name="password"/>
                            </Grid>
                    </Grid>
        
                    <Grid item container className={classes.formItem} justify={"center"}>
                        <Button type="submit" color="secondary" variant="contained">Login</Button>
                    </Grid>
                </Grid>
            </form>
            </Paper>
        </Grid>
    )
}