// Takes props: name, phone, email, contacted, approved, notes
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";

import HoldCheckbox from "../components/HoldCheckbox";
import MultiLineText from "../components/MultiLineText";
import SaveButton from "../components/SaveButton";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 275,
    }
}));

export default function RefCardAdmin(props){
    const classes = useStyles();

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
                    <HoldCheckbox label="Contaced successfully"/>
                </CardActions>
                <CardActions>
                    <HoldCheckbox label="Approved"/>
                </CardActions>
                <CardActions>
                    Notes: {props.notes}
                </CardActions>
                <CardActions>
                    <form>
                        <MultiLineText label="New Notes"/>
                        <SaveButton toLink="" buttonText=""/>
                    </form>
                </CardActions>
            </Card>
        </Grid>
    )
}