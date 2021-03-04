import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import ApplyButton from "./ApplyButton";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import PetsIcon from '@material-ui/icons/Pets';
import FolderSharedIcon from '@material-ui/icons/FolderShared';

const useStyles = makeStyles(theme => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        }
    },
    picContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
        }
    }
}))

export default function QuickActionsAdopter(){
    const classes = useStyles();

    return (
        <Grid container justify="space-evenly" style={{marginTop: "1em"}}>
            <Grid item>
                <ApplyButton toLink="/Dog-Dossiers" buttonText="Search for Dogs" /* color="secondary" */ icon={<PetsIcon />}/>
            </Grid>
            <Grid item>
                <ApplyButton toLink="/editprofile" buttonText="Edit My Profile" /* color="secondary" */ icon={<EditIcon />}/>
            </Grid>
        </Grid>
    )
}