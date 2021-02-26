import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import ProfileBlock from "../components/ProfileBlock";
import RoleTitleView from "../components/RoleTitleView";
import UserProfileActions from '../components/UserProfileActions';
import AdminProfileActions from "../components/AdminProfileActions";
import RoleTitleEdit from "../components/RoleTitleEdit";
import CapacityView from "../components/CapacityView";

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
            marginLeft: 0
        }
    }
}))

export default function MyProfile(){
    const classes = useStyles();

    return(
        <Grid container className={classes.mainContainer}>
            <ProfileBlock/>
            <UserProfileActions/>
            {/* <AdminProfileActions/> */}
            {/* <RoleTitleView/> */}
            <RoleTitleEdit/>
            <CapacityView/>
        </Grid>
    )
}