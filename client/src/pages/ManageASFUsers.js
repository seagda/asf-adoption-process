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
    marginLeft: theme.spacing(35),
    marginTop: theme.spacing(13),
    width: "70%",
    [theme.breakpoints.down("md")]:{
        width: "80%"
    },
    [theme.breakpoints.down("sm")]:{
        width: "100%"
    },
    [theme.breakpoints.down("xs")]:{
        spacing: theme.spacing(2),
        marginLeft: 0
    }
}))

export default function ManageASFUsers() {
    // set state of the mulitiselectchip
    const [region, setRegion] = React.useState([]);
    const [role, setRole] = React.useState([]);
  
    const handleRegionChange = (event) => {
      setRegion(event.target.value);
    };
    const handleRoleChange = (event) => {
      setRole(event.target.value);
    };

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

    const roles = [
        'Adopter',
        'Foster',
        'Regional Lead',
        'Transport',
        'Volunteer',
      ];

    const classes = useStyles()
    return (
        
        <Grid container className={classes.mainContainer}>
            <Grid container spacing={2}>
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
                    <MultiSelectChips names={regions} title="Select Region" selectedOption={region} onOptionChange={handleRegionChange}/>
                </Grid>
                <Grid item xs={6}>
                    <MultiSelectChips names={roles} title="Select Role" selectedOption={role} onOptionChange={handleRoleChange} />
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