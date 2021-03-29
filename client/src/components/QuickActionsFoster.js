import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import ApplyButton from "./ApplyButton";
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FolderSharedIcon from '@material-ui/icons/FolderShared';

// const useStyles = makeStyles(theme => ({

// }))

export default function QuickActionsFoster(){
    // const classes = useStyles();

    return (
        <Grid container justify="space-evenly" style={{marginTop: "1em"}}>
            <Grid item>
                <ApplyButton toLink="/editprofile" buttonText="Edit My Profile and Capacity" color="secondary" icon={<EditIcon />}/>
            </Grid>
            <Grid item>
                <ApplyButton toLink="/Manage-ASF-Users" buttonText="ASF Team Directory" color="secondary"  icon={<FolderSharedIcon />} />
            </Grid>
        </Grid>
    )
}