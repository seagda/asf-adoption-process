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
        },
        marginBottom: "5em"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 300,
        // fullWidth: true
    },
    marginFix: {
        [theme.breakpoints.down("sm")]: {
            marginLeft: "2.5em"
        }
    }
}));

export default function UserStatusEdit(props){
    const classes = useStyles();

    const [selectData, setSelectData] = useState({
        active: null
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
            active: props.userData?.active
        })
    },[props.userData?.active])

    return(
        <Grid item container className={classes.itemContainer, classes.marginFix}>
        <Grid container style={{marginTop: "1em"}}>
            <Grid item>
                <Typography variant="h4">Status</Typography>
                <Divider/>
            </Grid>
        </Grid>
        <Grid container justify="space-between">
            <Grid item style={{marginTop: "1em"}}>
                <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="active">Active?</InputLabel>
                    <Select
                    labelId="active"
                    id="active"
                    onChange={handleSelectChange}
                    value={selectData.active}
                    name="active"
                    label="Is active?"
                    InputLabelProps={{shrink: true}}
                    >
                    <MenuItem disabled value={null}>Active?</MenuItem>
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                    </Select>
                    </FormControl>
                </div>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="blocked">Blocked?</InputLabel>
                    <Select
                    labelId="blocked"
                    id="blocked"
                    onChange={props.blockChange}
                    value={props.blockedValue}
                    name="blocked"
                    label="Is blocked?"
                    InputLabelProps={{shrink: true}}
                    >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                    </Select>
                    </FormControl>
                </div>
            </Grid>
            <Grid item style={{marginTop: "1em"}}>
                <div>
                    <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="hold">On Hold?</InputLabel>
                    <Select
                    labelId="hold"
                    id="hold"
                    onChange={props.holdChange}
                    value={props.holdValue}
                    name="hold"
                    label="On hold?"
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
    )
}