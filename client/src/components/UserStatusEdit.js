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

    const startSelect = {};
    props.fields.forEach(field => startSelect[field.name] = "");
    const [selectData, setSelectData] = useState(startSelect)

    const handleSelectChange = (event)=>{
        setSelectData({
            ...selectData,
            [event.target.name]: event.target.value
        })
        props.handleInputChange(event)
    }

    useEffect(()=>{
        const newSelectData = {};
        props.fields.forEach(field => newSelectData[field.name] = props.data[field.name]);
        setSelectData(newSelectData);
    }, [props.data])

    return(
        <Grid item container className={classes.itemContainer}>
        <Grid container style={{marginTop: "1em"}}>
            <Grid item>
                <Typography variant="h4">Status</Typography>
                <Divider/>
            </Grid>
        </Grid>
        <Grid container justify="space-between">
            {props.fields.map(field => <Grid item style={{ marginTop: "1em" }}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id={`${field.name}-label`}>{field.label}</InputLabel>
                    <Select
                        labelId={`${field.name}-label`}
                        id={field.name}
                        onChange={handleSelectChange}
                        value={selectData[field.name]}
                        name={field.name}
                        label={field.label}
                    >
                        <MenuItem disabled value=""><em>None</em></MenuItem>
                        <MenuItem value={true}>Yes</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
                    </Select>
                </FormControl>
            </Grid>)}
        </Grid>
    </Grid>
    )
}