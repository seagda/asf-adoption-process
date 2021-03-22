import React, {useState, useEffect} from 'react';
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

    const [selectData, setSelectData] = useState({
        puppies: null,
        adults: null,
        seniors: null,
        withBehaviorIssues: null,
        withMedicalIssues: null
    })

    const handleSelectChange = (event)=>{
        setSelectData({
            ...selectData,
            [event.target.name]: event.target.value
        })
        props.handleInputChange(event)
    }

    useEffect(()=>{
        setSelectData({
            puppies: props.userData?.puppies,
            adults: props.userData?.adults,
            seniors: props.userData?.seniors,
            withBehaviorIssues: props.userData?.withBehaviorIssues,
            withMedicalIssues: props.userData?.withMedicalIssues,
        })
    },[props.userData?.puppies, props.userData?.adults, props.userData?.seniors, props.userData?.withBehaviorIssues, props.userData?.withMedicalIssues,])

    return( 
        <Grid item container className={classes.itemContainer}>
            <Grid item container xs={10} sm={6} md={6} lg={6} style={{marginTop: "3em"}} direction="column">
                <Grid item>
                    <Typography variant="h4">Cares for:</Typography>
                    <Divider/>
                </Grid>
                {props.editable.includes("puppies") || (props.editable.includes("*") && !props.editable.includes("!puppies")) ? <Grid item container style={{marginTop: "1em"}}>
                    <Grid item style={{marginTop: "1em"}}>
                    <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel shrink id="puppies">Puppies?</InputLabel>
                    <Select
                    labelId="puppies"
                    id="puppies"
                    onChange={handleSelectChange}
                    value={selectData.puppies}
                    name="puppies"
                    label="Puppies?"
                    InputLabelProps={{shrink: true}}
                    >
                    <MenuItem disabled value={null}>Puppies?</MenuItem>
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                    </Select>
                    </FormControl>
                    </div>
                    </Grid>
                </Grid> : null}
                {props.editable.includes("adults") || (props.editable.includes("*") && !props.editable.includes("!adults")) ? <Grid item container style={{marginTop: "1em"}}>
                    <Grid item style={{marginTop: "1em"}}>
                    <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel shrink id="adults">Adults?</InputLabel>
                    <Select
                    labelId="adults"
                    id="adults"
                    onChange={handleSelectChange}
                    value={selectData.adults}
                    name="adults"
                    label="Adults?"
                    InputLabelProps={{shrink: true}}
                    >
                    <MenuItem disabled value={null}>Adults?</MenuItem>
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                    </Select>
                    </FormControl>
                    </div>
                    </Grid>
                </Grid> : null}
            </Grid>
            <Grid item container xs={10} sm={6} md={6} lg={6} className={classes.seniorContainer} direction="column">
                {props.editable.includes("seniors") || (props.editable.includes("*") && !props.editable.includes("!seniors")) ? <Grid item container className={classes.seniorItem}>
                    <Grid item style={{marginTop: "1em"}}>
                    <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel shrink id="seniors">Seniors?</InputLabel>
                    <Select
                    labelId="seniors"
                    id="seniors"
                    onChange={handleSelectChange}
                    value={selectData.seniors}
                    name="seniors"
                    label="Seniors?"
                    InputLabelProps={{shrink: true}}
                    >
                    <MenuItem disabled value={null}>Seniors?</MenuItem>
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                    </Select>
                    </FormControl>
                    </div>
                    </Grid>
                </Grid> : null}
                {props.editable.includes("withBehaviorIssues") || (props.editable.includes("*") && !props.editable.includes("!withBehaviorIssues")) ? <Grid item container style={{marginTop: "1em"}}>
                    <Grid item style={{marginTop: "1em"}}>
                    <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel shrink id="withBehaviorIssues">Behaviorial Issues?</InputLabel>
                    <Select
                    labelId="withBehaviorIssues"
                    id="withBehaviorIssues"
                    onChange={handleSelectChange}
                    value={selectData.withBehaviorIssues}
                    name="withBehaviorIssues"
                    label="With behaviorial issues?"
                    InputLabelProps={{shrink: true}}
                    >
                    <MenuItem disabled value={null}>Behaviorial Issues?</MenuItem>
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                    </Select>
                    </FormControl>
                    </div>
                    </Grid>
                </Grid> : null}
            </Grid>
            <Grid item container xs={10} sm={6} md={6} lg={6} style={{marginTop: "1em"}} direction="column">
                {props.editable.includes("withMedicalIssues") || (props.editable.includes("*") && !props.editable.includes("!withMedicalIssues")) ? <Grid item container style={{marginTop: "1em"}}>
                    <Grid item>
                    <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel shrink id="withMedicalIssues">Medical Issues?</InputLabel>
                    <Select
                    labelId="withMedicalIssues"
                    id="withMedicalIssues"
                    onChange={handleSelectChange}
                    value={selectData.withMedicalIssues}
                    name="withMedicalIssues"
                    label="Medical Issues?"
                    InputLabelProps={{shrink: true}}
                    >
                    <MenuItem disabled value={null}>Medical Issues?</MenuItem>
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                    </Select>
                    </FormControl>
                    </div>
                    </Grid>
                </Grid> : null}
            </Grid>
    </Grid>
    )
}