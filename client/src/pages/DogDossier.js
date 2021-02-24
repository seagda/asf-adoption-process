import React from 'react'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input';
import { makeStyles, useTheme } from '@material-ui/core/styles'

const useStyles=makeStyles(theme => ({
    mainContainer: {
        marginTop: "5em",
        marginLeft: "20em", 
        [theme.breakpoints.down("xs")]:{
            marginLeft: "1em"
        }
    }
}))

export default function DogDossier() {
    const classes = useStyles()
    return (
        <Grid container className={classes.mainContainer}>
            <Grid item>
                <h1>helllllllllooooooooohelllllllllooooooooohelllllllllooooooooohelllllllllooooooooohelllllllllooooooooo</h1>
                <h1>helllllllllooooooooohelllllllllooooooooohelllllllllooooooooohelllllllllooooooooohelllllllllooooooooo</h1>
                <h1>helllllllllooooooooohelllllllllooooooooohelllllllllooooooooohelllllllllooooooooohelllllllllooooooooo</h1>
                <h1>helllllllllooooooooohelllllllllooooooooohelllllllllooooooooohelllllllllooooooooohelllllllllooooooooo</h1>
                <h1>helllllllllooooooooohelllllllllooooooooohelllllllllooooooooohelllllllllooooooooohelllllllllooooooooo</h1>
                <h1>helllllllllooooooooohelllllllllooooooooohelllllllllooooooooohelllllllllooooooooohelllllllllooooooooo</h1>
                <h1>helllllllllooooooooohelllllllllooooooooohelllllllllooooooooohelllllllllooooooooohelllllllllooooooooo</h1>
                <h1>helllllllllooooooooohelllllllllooooooooohelllllllllooooooooohelllllllllooooooooohelllllllllooooooooo</h1>
                <Input />
            </Grid>
        </Grid>
       
    )
}
   
