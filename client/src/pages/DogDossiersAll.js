import React from 'react'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AddButton from '../components/AddButton'
import MultiSelectChips from '../components/MultiSelectChips';
import DogAdoptionFlow from '../components/DogAdoptionFlow';
import OverviewTable from '../components/OverviewTable';

const useStyles=makeStyles(theme => ({
    mainContainer: {
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
            marginLeft: 5
        }
    },
  
    // chipSelectionWidth: {
    //     [theme.breakpoints.down("md")]:{
    //         width: 450
    //     },
    //     [theme.breakpoints.down("sm")]:{
    //         width: 400
    //     },
    //     [theme.breakpoints.down("xs")]:{
    //         width: 350
    //     }
    // }
}))

export default function DogDossiersAll() {
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

    const dogStatus = [
        'Pending Intake',
        'Foster Ready',
        'In Foster',
        'Adoption Ready',
        'Adopted',
      ];

    const classes = useStyles()
    return (
        
        <Grid container className={classes.mainContainer}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <Typography variant="h3" component="h4" gutterBottom align="center" color="primary">
                    Dog Dossiers
                    <Divider />
                </Typography>
                </Grid>
                <Grid item xs={4} s={4} m={8} lg={10}/>
                <Grid item xs={8} s={8} m={4} lg={2}>
                    <AddButton buttonText="Add Dog" toLink="/addDog" />
                </Grid>
                <Grid item xs={12}>
                     <form noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Search" variant="outlined" fullWidth />
                    </form>
                </Grid>
                <Grid item xs={12} s={12} m={6} lg={6}>
                    <MultiSelectChips names={regions} title="Select Region"/>
                </Grid>
                <Grid item xs={12} s={12} m={6} lg={6}>
                    <MultiSelectChips names={dogStatus} title="Select Dog Status"/>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={11}>
                    <div /* className={classes.flowContainer} */ style={{height: 100, width: 1500}}>
                        <DogAdoptionFlow />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <OverviewTable />
                </Grid>
            </Grid>
        </Grid>
       
    )
}
