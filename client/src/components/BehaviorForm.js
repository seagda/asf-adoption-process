import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Checkbox from "@material-ui/core/Checkbox";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";

import SingleSelect from "../components/SingleSelect";
import UploadButton from "../components/UploadButton";


const useStyles = makeStyles((theme) => ({
    itemContainer: {
        width: "100%",
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center",
            padding: "1em"
        }
    }
}));

export default function BehaviorForm(){
    const classes = useStyles();

    return(
        <Grid item container className={classes.itemContainer}>
            <Grid container>
                <Grid item style={{marginTop: "3em"}}>
                    <Typography variant="h4">Behavior Evaluation</Typography>
                    <Divider/>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item style={{marginTop: "1em"}}>
                    <Typography variant="h5" style={{textEmphasis: "bold"}}>Compliance</Typography>
                </Grid>
            </Grid>
            <Grid container justify="space-evenly">
                <Grid item container direction="column" xs={6} sm={6} md={6} lg={6}>
                    <Grid item style={{marginTop: "1em"}}>
                        <Typography>Sit On Command</Typography>
                        <Typography style={{marginTop: "1em"}}>Down</Typography>
                        <Typography style={{marginTop: "1em"}}>Stay</Typography>
                        <Typography style={{marginTop: "1em"}}>Leave it</Typography>
                        <Typography style={{marginTop: "1em"}}>Go in crate</Typography>
                        <Typography style={{marginTop: "1em"}}>Drop it</Typography>
                        <Typography style={{marginTop: "1em"}}>Recall</Typography>
                        <Typography style={{marginTop: "1em"}}>Heel</Typography>
                        <Typography style={{marginTop: "1em"}}>Fetch</Typography>
                    </Grid>
                </Grid>
                <Grid item container direction="column" xs={6} sm={6} md={6} lg={6}>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item style={{marginTop: "1em"}}>
                    <Typography variant="h5" style={{textEmphasis: "bold"}}>Touch Sensitivity</Typography>
                </Grid>
            </Grid>
            <Grid container justify="space-evenly">
                <Grid item container direction="column" xs={6} sm={6} md={6} lg={6}>
                    <Grid item style={{marginTop: "1em"}}>
                        <Typography>Touch at all</Typography>
                        <Typography style={{marginTop: "1em"}}>Paws/Nails</Typography>
                        <Typography style={{marginTop: "1em"}}>Legs</Typography>
                        <Typography style={{marginTop: "1em"}}>Hindquarters</Typography>
                        <Typography style={{marginTop: "1.25em"}}>Neck</Typography>
                        <Typography style={{marginTop: "1.25em"}}>Collar</Typography>
                        <Typography style={{marginTop: "1.25em"}}>Head</Typography>
                        <Typography style={{marginTop: "1.25em"}}>Muzzle</Typography>
                        <Typography style={{marginTop: "1em"}}>Put leash on</Typography>
                        <Typography style={{marginTop: "1em"}}>Brushing</Typography>
                    </Grid>
                </Grid>
                <Grid item container direction="column" xs={6} sm={6} md={6} lg={6}>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item style={{marginTop: "1em"}}>
                    <Typography variant="h5" style={{textEmphasis: "bold"}}>Fear/Aggression response</Typography>
                </Grid>
            </Grid>
            <Grid container justify="space-evenly">
                <Grid item container direction="column" xs={6} sm={6} md={6} lg={6}>
                    <Grid item style={{marginTop: "1em"}}>
                        <Typography>Cats</Typography>
                        <Typography style={{marginTop: "1em"}}>Dogs</Typography>
                        <Typography style={{marginTop: "1em"}}>Small pets</Typography>
                        <Typography style={{marginTop: "1em"}}>New people</Typography>
                        <Typography style={{marginTop: "1.25em"}}>Cars</Typography>
                        <Typography style={{marginTop: "1.25em"}}>Noisy streets</Typography>
                        <Typography style={{marginTop: "1.25em"}}>Strange objects (tractor etc.)</Typography>
                        <Typography style={{marginTop: "1.25em"}}>Hats/hoodies</Typography>
                        <Typography style={{marginTop: "1em"}}>Sunglasses</Typography>
                        <Typography style={{marginTop: "1.25em"}}>Beards</Typography>
                        <Typography style={{marginTop: "1em"}}>Babies</Typography>
                        <Typography style={{marginTop: "1em"}}>Children</Typography>
                        <Typography style={{marginTop: "1em"}}>Knocking at door</Typography>
                    </Grid>
                </Grid>
                <Grid item container direction="column" xs={6} sm={6} md={6} lg={6}>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                    <Grid item>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                        <Checkbox icon={<StarBorder/>} checkedIcon={<Star/>}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}