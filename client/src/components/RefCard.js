// Takes props: name, phone, email, contacted, approved, notes
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";

import HoldCheckbox from "./HoldCheckbox";
import RoleTitles from "./RoleTitles";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    }
}));

export default function RefCard(props){
    const classes = useStyles();
    const contacted = true;
    const approved = true;
    const admin = true;

    return(
        <Grid item style={{marginTop: "1em"}}> 
            <Card className={classes.root}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        Reference 
                    </Typography>
                    <Typography variant="body2" component="p" style={{marginTop: "1em"}}>
                        Name: {props.name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Phone: {props.phone}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Email: {props.email}
                    </Typography>
                </CardContent>
                <CardActions>
                    Contaced successfully? {contacted ? <RoleTitles label="Yes"/> : <RoleTitles label="No"/>}
                </CardActions>
                {admin ? 
                    <CardActions>
                        Approved? {approved ? <RoleTitles label="Yes"/> : <RoleTitles label="No"/>}
                    </CardActions>
                : null}
                <CardActions>
                    {props.notes ? <Typography>Notes: {props.notes}</Typography> : null}
                </CardActions>
            </Card>
        </Grid>
    )
}