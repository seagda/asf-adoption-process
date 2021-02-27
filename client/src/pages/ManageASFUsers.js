import React from 'react'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AddButton from '../components/AddButton'
import MultiSelectChips from '../components/MultiSelectChips';
import UserFlow from '../components/UserFlow';
import UserTable from '../components/UserTable';

const useStyles=makeStyles(theme => ({
    mainContainer: {
        marginTop: "5em",
        marginLeft: "20em", 
        [theme.breakpoints.down("xs")]:{
            marginLeft: "1em"
        }
    }
}))

export default function ManageASFUsers() {
    const regions = [
        'Midwest/South',
        'Mid-Atlantic',
        'Mississippi Valley',
        'West Coast',
        'Great Lakes',
        'Plains States',
        'Rocky Mountain',
        'Southeast',
        'Northeast',
        'Texas'
      ];

    const role = [
        'Adopter',
        'Foster',
        'Regional Lead',
        'Transport',
        'Volunteer',
      ];

    const classes = useStyles()
    return (
        
        <Grid container className={classes.mainContainer}>
            <Grid container xs={12} s={10} m={8} lg={8} spacing={2}>
                <Grid item xs={12}>
                <Typography variant="h3" component="h4" gutterBottom align="center" color="primary">
                    Manage ASF Users
                    <Divider />
                </Typography>
                </Grid>
                <Grid item xs={10} />
                <Grid item xs={2}>
                    <AddButton buttonText="Add User" toLink="/createUser" />
                </Grid>
                <Grid item xs={12}>
                     <form noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Search" variant="outlined" fullWidth />
                    </form>
                </Grid>
                <Grid item xs={6}>
                    <MultiSelectChips names={regions} title="Select Region"/>
                </Grid>
                <Grid item xs={6}>
                    <MultiSelectChips names={role} title="Select Role"/>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <div style={{height: 100, width: 1000}}>
                        <UserFlow />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <UserTable />
                </Grid>
            </Grid>
        </Grid>
       
    )
}