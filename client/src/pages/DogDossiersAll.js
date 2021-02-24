import React from 'react'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import RegionSelectMenu from '../components/RegionSelectMenu'
import AddButton from '../components/AddButton'

const useStyles=makeStyles(theme => ({
    mainContainer: {
        marginTop: "5em",
        marginLeft: "20em", 
        [theme.breakpoints.down("xs")]:{
            marginLeft: "1em"
        }
    }
}))

export default function DogDossiersAll() {
    const classes = useStyles()
    return (
        <Grid container className={classes.mainContainer}>
            <Grid item container>
                <Grid container justify="flex-end">
                    <AddButton buttonText={"Add Dog"} />
                </Grid>
                <Grid container>
                    <Grid item>
                    <form noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Search" variant="outlined" />
                    </form>
                    </Grid>
                    <Grid item>
                    <RegionSelectMenu />
                    </Grid>
                </Grid>
                <Grid container>
                    <Typography>
                       long graphic of the status of the dogs 
                    </Typography>
                </Grid>
                <Grid container>
                <Typography>
                       long graphic of the status of the dogs 
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
       
    )
}
