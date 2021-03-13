import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        },
        marginBottom: "5em"
    },
    marginFix: {
        [theme.breakpoints.down("sm")]: {
            marginLeft: "2.5em"
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
        // fullWidth: true
    },
    seniorContainer: {
        marginTop: "3em",
        [theme.breakpoints.down("xs")]: {
            marginTop: "1em"
        }
    },
    seniorItem: {
        marginTop: "4.25em",
        [theme.breakpoints.down("xs")]: {
            marginTop: "0.5em"
        }
    }
}));

export default function UserCaresForEdit(props){
    const classes = useStyles();

    return(
        <Grid item container className={classes.itemContainer}>
            <Grid item container xs={10} sm={6} md={6} lg={6} style={{marginTop: "3em"}} direction="column">
                <Grid item>
                    <Typography variant="h4">Cares for:</Typography>
                    <Divider/>
                </Grid>
                <Grid item container style={{marginTop: "1em"}}>
                    <Grid item style={{marginTop: "1em"}}>
                    <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="puppies">Puppies?</InputLabel>
                    <Select
                    labelId="puppies"
                    id="puppies"
                    onChange={props.puppiesChange}
                    value={props.puppiesValue}
                    name="puppies"
                    label="Puppies?"
                    InputLabelProps={{shrink: true}}
                    >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                    </Select>
                    </FormControl>
                    </div>
                    </Grid>
                </Grid>
                <Grid item container style={{marginTop: "1em"}}>
                    <Grid item style={{marginTop: "1em"}}>
                    <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="adults">Adults?</InputLabel>
                    <Select
                    labelId="adults"
                    id="adults"
                    onChange={props.adultsChange}
                    value={props.adultsValue}
                    name="adults"
                    label="Adults?"
                    InputLabelProps={{shrink: true}}
                    >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                    </Select>
                    </FormControl>
                    </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={10} sm={6} md={6} lg={6} className={classes.seniorContainer} direction="column">
                <Grid item container className={classes.seniorItem}>
                    <Grid item style={{marginTop: "1em"}}>
                    <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="seniors">Seniors?</InputLabel>
                    <Select
                    labelId="seniors"
                    id="seniors"
                    onChange={props.seniorsChange}
                    value={props.seniorsValue}
                    name="active"
                    label="Seniors?"
                    InputLabelProps={{shrink: true}}
                    >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                    </Select>
                    </FormControl>
                    </div>
                    </Grid>
                </Grid>
                <Grid item container style={{marginTop: "1em"}}>
                    <Grid item style={{marginTop: "1em"}}>
                    <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="withBehaviorIssues">Behaviorial Issues?</InputLabel>
                    <Select
                    labelId="withBehaviorIssues"
                    id="withBehaviorIssues"
                    onChange={props.behaviorChange}
                    value={props.behaviorValue}
                    name="withBehaviorIssues"
                    label="With behaviorial issues?"
                    InputLabelProps={{shrink: true}}
                    >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                    </Select>
                    </FormControl>
                    </div>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={10} sm={6} md={6} lg={6} style={{marginTop: "1em"}} direction="column">
                <Grid item container style={{marginTop: "1em"}}>
                    <Grid item>
                    <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="withMedicalIssues">Medical Issues?</InputLabel>
                    <Select
                    labelId="withMedicalIssues"
                    id="withMedicalIssues"
                    onChange={props.medicalChange}
                    value={props.medicalValue}
                    name="withMedicalIssues"
                    label="Medical Issues?"
                    InputLabelProps={{shrink: true}}
                    >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                    </Select>
                    </FormControl>
                    </div>
                    </Grid>
                </Grid>
            </Grid>
    </Grid>
    )
}