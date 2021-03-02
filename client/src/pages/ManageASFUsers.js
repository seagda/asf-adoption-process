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
    const [roles, setRoleList] = React.useState([
        'adopter',
        'foster',
        'regional lead',
        'transport',
        'volunteer',
      ]);
    
    const [searchUser, setUserSearch] = React.useState([]);
    const [users, setUserState] = useState([])

    useEffect(() => {
        loadUsers()
        }, [])
    
        function loadUsers() {
            API.getUsersAll()
                .then(res => {
                setUserState(res)
                console.log(res)
                })
                .catch(err => console.log(err));

            API.getRegions()
                .then(res => {
                setRegionList(res)
                console.log(res)
                })
                .catch(err => console.log(err));

            // API.getRoles()
            //     .then(res => {
            //     setRoleList(res)
            //     console.log(res)
            //     })
            //     .catch(err => console.log(err));
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
                <Grid item xs={8} s={8} m={4} lg={2}>
                    <AddButton buttonText="Add User" toLink="/createUser" />
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
                    <MultiSelectChips names={roles} title="Select Role" selectedOption={selectedRoles} onOptionChange={handleRoleChange} />
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={2}/>
                <Grid item xs={10}>
                    <Hidden smDown>
                    <div style={{height: 150, width: '80%'}} >
                        <UserFlow />
                    </div>
                    </Hidden>
                </Grid>
                <Grid item xs={12}>
                <UserTable rows={users.filter( (user) => {
                        if (!selectedRegions.includes(user.ResidesInRegion)) {
                            return false;
                        } 
                        if (!selectedRoles.some( (role) => user.Roles.includes(role))) {
                            return false; 
                        }
                        if (!(parseInt(searchUser) === user.id || user.name.includes(searchUser))) {
                            return false; 
                        }
                        return true;

                    })}/>
                </Grid>
            </Grid>
        </Grid>
       
    )
}