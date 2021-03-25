import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AddButton from '../components/AddButton'
import MultiSelectChips from '../components/MultiSelectChips';
import UserFlow from '../components/UserFlow';
import UserTable from '../components/UserTable';
import Hidden from '@material-ui/core/Hidden';
import API from '../utils/API';
import SearchBar from "../components/SearchBar";
import Geocode from "react-geocode";
import DogMap from '../components/DogMap';

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

// set response language. Defaults to english.
Geocode.setLanguage("en");
Geocode.setRegion("us");
Geocode.setLocationType("ROOFTOP");

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

export default function ManageASFUsers() {
    const [error, setError] = useState("");
    
    const [selectedRegions, setRegion] = React.useState([]);
    const [regions, setRegionList] = React.useState([]);
    
    const [selectedRoles, setRole] = React.useState([]);
    const [roles, setRoleList] = React.useState([]);
    
    const [searchUser, setUserSearch] = React.useState("");
    const [users, setUserState] = useState([])

    useEffect(() => {
        loadUsers()
        }, [])
    
        function loadUsers() {
            API.getUsersAll()
                .then(res => {
                    console.log(res)
                    return Promise.all(res.data.map(user => Geocode.fromAddress(`${user.Address.street} ${user.Address.street2} ${user.Address.city}, ${user.Address.state} ${user.Address.zip5}`).then(response => {
                        const { lat, lng } = response.results[0].geometry.location;
                        return { ...user, coordinates: { lat, lng } }
                    })));
                }).then(users => {
                    setUserState(users)
                }).catch(console.error);

            API.getRegions()
                .then(res => {
                setRegionList(res.data)
                })
                .catch(err => console.log(err));

            API.getRoles()
                .then(res => {
                setRoleList(res.data)
                })
                .catch(err => console.log(err));
        };

    const handleRegionChange = (event) => {
      setRegion(event.target.value);
    };
    const handleRoleChange = (event) => {
      setRole(event.target.value);
    };
    const handleUserSearch = (event) => {
      setUserSearch(event.target.value);
    };

    const classes = useStyles()

    const userString = localStorage.getItem("user")
    if(!userString){
        window.location = "/"
    }
    const user = JSON.parse(userString)

    return (
        
        <Grid container className={classes.mainContainer}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <Typography variant="h3" component="h4" gutterBottom align="center" color="primary" selectedOption={searchUser} onOptionChange={handleUserSearch}>
                    Manage ASF Users
                    <Divider />
                </Typography>
                </Grid>
                <Grid item xs={4} s={4} m={8} lg={10} />
                {user.roles.some(role => ["Super Admin", "Regional", "Admin"].includes(role)) ? 
                (<Grid item xs={8} s={8} m={4} lg={2}>
                    <AddButton buttonText="Add User" toLink="/createUser" />
                </Grid>) : null}
                <Grid item xs={12}>
                    <SearchBar searchUser={searchUser} onChange={handleUserSearch} />
                </Grid>
                <Grid item xs={12} s={12} m={6} lg={6}>
                    <MultiSelectChips options={regions} title="Select Region" selectedOption={selectedRegions} onOptionChange={handleRegionChange}/>
                </Grid>
                <Grid item xs={12} s={12} m={6} lg={6}>
                    <MultiSelectChips options={roles} title="Select Role" selectedOption={selectedRoles} onOptionChange={handleRoleChange} />
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12}>
                    <Hidden smDown>
                    <div style={{height: 150, width: '100%'}} >
                        <UserFlow />
                    </div>
                    </Hidden>
                </Grid>
                <Grid item xs={12}>
                    <UserTable rows={users.filter( (user) => {
                            if (selectedRegions.length > 0 && !selectedRegions.includes(user.ResidesInRegion.id)) {
                                return false;
                            } 
                            if (selectedRoles.length > 0 && !selectedRoles.some( (selectedRole) => user.Roles.some(role => role.id === selectedRole))) {
                                return false; 
                            }
                            if (!(parseInt(searchUser) === user.id || (user.firstName + " " + user.lastName).toLowerCase().includes(searchUser.toLowerCase()))) {
                                return false; 
                            }
                            return true;

                    })}/>
                </Grid>
                <Grid item xs={12}>
                    <DogMap displaySubjects={users.filter( (user) => {
                        if (selectedRegions.length > 0 && !selectedRegions.includes(user.ResidesInRegion.id)) {
                            return false;
                        } 
                        if (selectedRoles.length > 0 && !selectedRoles.some( (selectedRole) => user.Roles.some(role => role.id === selectedRole))) {
                            return false; 
                        }
                        if (!(parseInt(searchUser) === user.id || (user.firstName + " " + user.lastName).toLowerCase().includes(searchUser.toLowerCase()))) {
                            return false; 
                        }
                        return true;

                    })} />
                </Grid>
            </Grid>
        </Grid>
       
    )
}