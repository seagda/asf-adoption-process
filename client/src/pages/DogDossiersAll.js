import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AddButton from '../components/AddButton'
import MultiSelectChips from '../components/MultiSelectChips';
import DogAdoptionFlow from '../components/DogAdoptionFlow';
import OverviewTable from '../components/OverviewTable';
import Hidden from '@material-ui/core/Hidden';

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
    }
}))

export default function DogDossiersAll() {

    const [selectedRegions, setRegion] = React.useState([]);
    const [selectedDogStatus, setDogStatus] = React.useState([]);
    const [searchDog, setDogSearch] = React.useState([]);
  
    const handleRegionChange = (event) => {
      setRegion(event.target.value);
    };
    const handleDogStatusChange = (event) => {
      setDogStatus(event.target.value);
    };
    const handleDogSearch = (event) => {
        setDogSearch(event.target.value);
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
                {/* double check on prop to set searchUser state here */}
                <Typography variant="h3" component="h4" gutterBottom align="center" color="primary" selectedOption={searchDog} onOptionChange={handleDogSearch}>
                    Dog Dossiers
                    <Divider />
                </Typography>
                </Grid>
                <Grid item xs={4} s={4} m={8} lg={10}/>
                <Grid item xs={8} s={8} m={4} lg={2}>
                    <AddButton buttonText="Add Dog" toLink="/createdog" />
                </Grid>
                <Grid item xs={12}>
                     <form noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Search" variant="outlined" fullWidth />
                    </form>
                </Grid>
                <Grid item xs={12} s={12} m={6} lg={6}>
                    <MultiSelectChips names={regions} title="Select Region" selectedOption={selectedRegions} onOptionChange={handleRegionChange}/>
                </Grid>
                <Grid item xs={12} s={12} m={6} lg={6}>
                    <MultiSelectChips names={dogStatus} title="Select Dog Status" selectedOption={selectedDogStatus} onOptionChange={handleDogStatusChange} />
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={2} />
                <Grid item xs={10} justifyContent="center" >
                    <Hidden smDown>
                    <div style={{height: 100, width: '70%'}}>
                        <DogAdoptionFlow />
                    </div>
                    </Hidden>
                </Grid>
                <Grid item xs={12}>
                    <OverviewTable selectedRegions={selectedRegions} selectedDogStatus={selectedDogStatus} searchDog={searchDog}/>
                </Grid>
            </Grid>
        </Grid>
       
    )
}
