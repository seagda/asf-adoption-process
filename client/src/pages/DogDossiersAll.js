
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import React, { useState, useEffect } from "react";
import AddButton from '../components/AddButton'
import MultiSelectChips from '../components/MultiSelectChips';
import DogAdoptionFlow from '../components/DogAdoptionFlow';
import OverviewTable from '../components/OverviewTable';
import SearchBar from '../components/SearchBar';
import Hidden from '@material-ui/core/Hidden';
import API from '../utils/API';
import MapBox from '../components/MapBox';

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
    const [error, setError] = useState("");
    
    const [selectedRegions, setRegion] = React.useState([]);
    const [regions, setRegionList] = React.useState([]);
    
    const [selectedDogStatus, setDogStatus] = React.useState([]);
    const [dogStatusList, setDogStatusList] = React.useState([]);
   
    const [searchDog, setDogSearch] = React.useState("");
    const [dogs, setDogState] = useState([])
    
    useEffect(() => {
    loadDogs()
    }, [])

    function loadDogs() {
        API.getDogDossiersAll()
            .then(res => {
            setDogState(res.data)
            console.log(res)
            })
            .catch(err => console.log(err));

        API.getRegions()
            .then(res => {
            setRegionList(res.data)
            console.log(res)
            })
            .catch(err => console.log(err));

        API.getDogStatus()
            .then(res => {
            setDogStatusList(res.data)
            console.log(res)
            })
            .catch(err => console.log(err));
    };
  
    const handleRegionChange = (event) => {
      setRegion(event.target.value);
    };
    const handleDogStatusChange = (event) => {
      setDogStatus(event.target.value);
    };
    const handleSearchInputChange = (event) => {
      setDogSearch(event.target.value);
    };

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
                    <AddButton buttonText="Add Dog" toLink="/createdog" />
                </Grid>
                <Grid item xs={12}>
                    <SearchBar searchDog={searchDog} onChange={handleSearchInputChange}/>
                </Grid>
                <Grid item xs={12} s={12} m={6} lg={6}>
                    <MultiSelectChips options={regions} title="Select Region" selectedOption={selectedRegions} onOptionChange={handleRegionChange}/>
                </Grid>
                <Grid item xs={12} s={12} m={6} lg={6}>
                    <MultiSelectChips options={dogStatusList} title="Select Dog Status" selectedOption={selectedDogStatus} onOptionChange={handleDogStatusChange} />
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={1} />
                <Grid item xs={11} justifyContent="center" >
                    <Hidden smDown>
                    <div style={{height: 120, width: '80%'}}>
                        <DogAdoptionFlow />
                    </div>
                    </Hidden>
                </Grid>
                <Grid item xs={12}>
                    <OverviewTable rows={dogs.filter( (dog) => {
                        if (selectedRegions.length > 0 && !selectedRegions.includes(dog.Region.id)) {
                            return false;
                        } 
                        if (selectedDogStatus.length > 0 && !selectedDogStatus.includes(dog.DogStatus.id)) {
                            return false; 
                        }
                        if (!(parseInt(searchDog) === dog.id || dog.name.toLowerCase().includes(searchDog.toLowerCase()))) {
                            return false; 
                        }
                        return true;

                    })}/>
                </Grid>
                <Grid item xs={12}>
                    <MapBox dogLocation={dogs.filter( (dog) => {
                        if (selectedRegions.length > 0 && !selectedRegions.includes(dog.Region.id)) {
                            return false;
                        } 
                        if (selectedDogStatus.length > 0 && !selectedDogStatus.includes(dog.DogStatus.id)) {
                            return false; 
                        }
                        if (!(parseInt(searchDog) === dog.id || dog.name.toLowerCase().includes(searchDog.toLowerCase()))) {
                            return false; 
                        }
                        return true;

                    })} />
                </Grid>
            </Grid>
        </Grid>
       
    )
}
