import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

import SaveButton from "../components/SaveButton";
import MultiLineText from "../components/MultiLineText";
import RegionSelectMenu from "../components/RegionSelectMenu";

const useStyles = makeStyles(theme => ({
    roleContainer: {
        marginBottom: "3em"
    },
    roleItem: {
        justifyContent: "space-between",
        [theme.breakpoints.down("xs")]: {
            alignItems: "center",
            justifyContent: "center"
        }
    }
}))

export default function RoleAssignment(){
    const classes = useStyles();

    return(
        <Grid item container className={classes.roleContainer}>
        <Grid container className={classes.roleItem}>
            <Grid item>
                <Typography>Last Updated: 02/23/2021</Typography>
            </Grid>
        </Grid>
        <Grid container className={classes.roleItem}>
            <Grid item>
                <RegionSelectMenu className={classes.select}/>
            </Grid>
            <MultiLineText label="Admin Notes"/>
        </Grid>
        <Grid container justify="center">
            <SaveButton buttonText="Save New User"/>
        </Grid>
    </Grid>
    )
}