import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import {NavLink} from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        }
    },
    avatarContainer: {
        display: "flex",
        justifyContent: "space-between"
    }
}));

export default function DogInfoCurrent(props){
    const classes = useStyles();

    return(
        <Grid item container className={classes.itemContainer}>
            <Grid item container xs={10} sm={8} md={8} lg={10} style={{marginTop: "3em"}} direction="column">
                    <Grid item>
                        <Typography variant="h4">Current Info</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item container style={{marginTop: "1em"}}>
                        <Paper style={{padding: "1em"}}>
                        <Grid item xs={10} sm={6} md={8} lg={10}>
                            {props.currentlyWith ? 
                            <Typography style={{fontWeight: "bold"}}>Currently With:
                            <NavLink gutterBottom style={{textDecoration: "none"}} to={`/userView/${props.currentlyWithId}`}> 
                                <div className={classes.avatarContainer}>
                                    <Avatar alt="user photo" src={props.avatar}/>
                                    <Typography>{props.currentlyWith.firstName} {props.currentlyWith.lastName}</Typography>
                                </div>
                            </NavLink> 
                            <Divider/>
                                <Typography>Region: {props.region?.name}</Typography>
                                <Divider/>
                                <Typography>{props.address?.street}</Typography>
                                <Typography>{props.address?.street2}</Typography>
                                <Typography>{props.address?.city}, {props.address?.state}</Typography>
                                <Typography>{props.currentlyWith.phone}</Typography>
                                <Typography>{props.currentlyWith.email}</Typography>
                            </Typography> : 
                            <Typography style={{fontWeight: "bold", marginRight: "3em"}}>Dog not currently assigned to ASF team member</Typography>}
                        </Grid>

                        <Grid item xs={10} sm={6} md={8} lg={10}>
                            <Typography style={{fontWeight: "bold", marginTop: "1em"}}>
                                Behaviorial Issues:
                                <Typography>{props.behaviorIssues}</Typography> 
                            </Typography>
                        </Grid>

                        <Grid item xs={10} sm={6} md={8} lg={6}>
                            {props.blocked ? <Typography style={{marginTop: "1em", color: "red", fontWeight: "bold"}}>Dog is BLOCKED</Typography> : null}
                        </Grid>
                        </Paper>
                    </Grid>
            </Grid>
        </Grid>
    )
}