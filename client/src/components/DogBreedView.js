import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        }
    },
    root: {
        minWidth: 275
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 3,
    }
}));

export default function DogBreedView(props){
    const classes = useStyles();
    const admin = true;

    return(
        <Grid item container className={classes.itemContainer}>
            <Grid item container xs={10} sm={8} md={8} lg={10} style={{marginTop: "3em"}} direction="column">
                    <Grid item>
                        <Typography variant="h4">Breed Info</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item xs={10} sm={6} md={4} lg={3} style={{marginTop: "1em"}} justify={"space-between"}>
                        <Paper style={{padding: "1em"}}>
                            <Grid>
                                <Typography style={{fontWeight: "bold"}}>Coat:<Typography>{props.coat}</Typography></Typography>
                            </Grid>
                            <Grid>
                                <Typography style={{marginTop: "1em", fontWeight: "bold"}}>Weight:<Typography>{props.weight}</Typography></Typography>
                            </Grid>
                            <Grid>
                                {props.purebred ? <Typography style={{marginTop: "1em", fontWeight: "bold"}}> Purebred</Typography> : <Typography style={{marginTop: "1em", fontWeight: "bold"}}>Mixed with: <Typography>{props.secondary}</Typography> </Typography>}
                            </Grid>
                        </Paper>

                        {/* <Card className={classes.root} variant="outlined">
                            <CardContent>
                                <Typography className={classes.pos} color="textPrimary" gutterBottom>
                                    Coat: <span>{props.coat}</span>
                                </Typography>
                                <Typography className={classes.pos} color="textPrimary">
                                    Weight: <span>{props.weight}</span>
                                </Typography>
                                <Divider/>
                                {props.purebred ? <Typography style={{marginTop: "1em", fontWeight: "bold"}}> Purebred</Typography> : <Typography style={{marginTop: "1em"}}>Mixed with: {props.secondary}</Typography>}
                            </CardContent>
                        </Card> */}
                    </Grid>
            </Grid>
        </Grid>
    )
}