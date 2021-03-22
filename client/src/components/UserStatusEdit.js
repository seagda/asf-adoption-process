import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
        // fullWidth: true
    }
}));

export default function UserStatusEdit(props){
    const classes = useStyles();

    const [selectData, setSelectData] = useState({
        active: "",
        blocked: "",
        hold: ""
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
            active: props.userData?.active,
            blocked: props.userData?.blocked,
            hold: props.userData?.hold
        })
    },[props.userData?.active, props.userData?.blocked, props.userData?.hold])

    return(
        <Grid item container className={classes.itemContainer}>
        <Grid container style={{marginTop: "1em"}}>
            <Grid item>
                <Typography variant="h4">Status</Typography>
                <Divider/>
            </Grid>
        </Grid>
        <Grid container justify="space-between">
            {[{name: "active", question: "active"}, {name: "blocked", question: "blocked"}, {name: "hold", question: "on hold"}].map(field => props.editable.includes(field.name) || (props.editable.includes("*") && !props.editable.includes(`!${field.name}`)) ? <Grid item style={{ marginTop: "1em" }}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id={`${field.name}-label`}>Is {field.question}?</InputLabel>
                    <Select
                        labelId={`${field.name}-label`}
                        id={field.name}
                        onChange={handleSelectChange}
                        value={selectData[field.name]}
                        name={field.name}
                        label={`Is ${field.question}?`}
                    >
                        <MenuItem disabled value=""><em>None</em></MenuItem>
                        <MenuItem value={true}>Yes</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
                    </Select>
                </FormControl>
            </Grid> : null)}
        </Grid>
    </Grid>
    )
}