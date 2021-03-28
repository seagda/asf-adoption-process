import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

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

export default function UserAddress(props){
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return(
        <Grid item container className={classes.itemContainer}>
            <Grid item container style={{marginTop: "3em"}} direction="column">
                    <Grid item>
                        <Typography variant="h4">Location</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item container>
                        <Grid container>
                            <Grid item container direction="column" style={{marginTop: "2em"}} xs={10} sm={10} md={2} lg={2}>

                                <Card className={classes.root} variant="outlined">
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            Region: 
                                        </Typography>
                                        <Typography variant="h6" component="h2">
                                            {props.region}
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            Address:
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            {props.street}
                                            <br />
                                            {props.street2}
                                            <br/>
                                            {props.city}, {props.state} {props.zip}
                                        </Typography>
                                    </CardContent>
                                    {/* <CardActions>
                                        <Button size="small">Contact</Button>
                                    </CardActions> */}
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
            </Grid>
        </Grid>
    )
}