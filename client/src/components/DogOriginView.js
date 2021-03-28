import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        }
    }
}));

export default function DogOriginView(props){
    const classes = useStyles();
    const admin = true;

    return(
        <Grid item container className={classes.itemContainer}>
            <Grid item container xs={10} sm={8} md={8} lg={10} style={{marginTop: "3em"}} direction="column">
                    <Grid item>
                        <Typography variant="h4">Origin Info</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item container style={{marginTop: "1em"}} justify={"space-between"}>
                        {props.origin ? 
                            <Paper style={{padding: "1em"}}>
                                <Grid item xs={10} sm={6} md={8} lg={10}>
                                    <Typography style={{marginTop: "1em", fontWeight: "bold"}}>Region:<Typography>{props.originRegion}</Typography></Typography>
                                </Grid>
                                <Grid item xs={10} sm={6} md={8} lg={10}>
                                    <Typography style={{marginTop: "1em", fontWeight: "bold"}}>Name:<Typography>{props.originName}</Typography></Typography>
                                </Grid>
                                <Grid item xs={10} sm={6} md={8} lg={10}>
                                    <Typography style={{marginTop: "1em", fontWeight: "bold"}}>Phone:<Typography>{props.originPhone}</Typography></Typography>
                                </Grid>
                                <Grid item xs={10} sm={6} md={8} lg={10}>
                                    <Typography style={{marginTop: "1em", fontWeight: "bold"}}>Address:</Typography>
                                    <Typography>{props.originStreet}</Typography>
                                    <Typography>{props.originCity}, {props.originState} {props.originZip}</Typography> 
                                </Grid>
                            </Paper>
                            :   <Typography style={{ fontWeight: "bold"}}>Origin info unknown</Typography>
                        }

                        <Grid item xs={10} sm={6} md={8} lg={6}>
                            <Typography style={{fontWeight: "bold"}}>Pull Cost:<Typography>${props.pullCost}</Typography></Typography>
                        </Grid>

                    </Grid>
            </Grid>
        </Grid>
    )
}