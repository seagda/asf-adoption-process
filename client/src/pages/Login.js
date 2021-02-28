import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

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

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = e => {
        e.preventDefault();
        console.log(email, password)
    }

    return(
        <Grid container className={classes.mainContainer}>
            <Paper>
            <form onSubmit={handleSubmit}>
                <Grid item container className={classes.itemContainer}>
                    <Grid item>
                        <div className={classes.form}>
                            <Grid item container className={classes.formItem}>
                                <TextField type="email" variant="outlined" label="Email" onChange={e => setEmail(e.target.value)}/>
                            </Grid>
                            <Grid item container className={classes.formItem}>
                                <TextField variant="outlined" type="password" label="Password" onChange={e => setPassword(e.target.value)}/>
                            </Grid>
                        </div>
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