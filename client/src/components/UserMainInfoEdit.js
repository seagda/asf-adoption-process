import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PublishIcon from "@material-ui/icons/Publish";
import Image from "../components/Image";

const useStyles = makeStyles((theme) => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        },
        marginBottom: "5em"
    },
    form: {
        paddingRight: "3em",
        [theme.breakpoints.down("sm")]:{
            padding: "1em"
        }
    },
    formItem: {
        marginBottom: "1em"
    },
    picContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
        },
        marginBottom: "2em"
    },
    button: {
        margin: theme.spacing(1),
    }
}));

export default function UserMainInfoEdit(props){
    const classes = useStyles();

    return (
        <Grid item container className={classes.itemContainer}>
            <Grid container justify="space-evenly" className={classes.picContainer}>
                <Grid item>
                    <Image alt={`${props.userData?.firstName}'s profile picture`} pic={props.photoUrl} />
                    {props.editable.includes("photo") || (props.editable.includes("*") && !props.editable.includes("!photo")) ? <Button className={classes.button} variant="contained" color="secondary" className={classes.button} startIcon={<PublishIcon />} component="label">
                        Change Photo
                    <input type="file" hidden onChange={props.handlePhotoChange} />
                    </Button> : null}
                </Grid>
                <Grid item className={classes.form}>
                    {[
                        { label: "First Name", name: "firstName" },
                        { label: "Last Name", name: "lastName" },
                        { label: "Phone", name: "phone", type: "tel" },
                        { label: "Email", name: "email", type: "email" },
                        { label: "Date of Birth", name: "dob", type: "date" }
                    ].filter(field => props.editable.includes(field.name) || (props.editable.includes("*") && !props.editable.includes(`!${field.name}`))).map(field => (
                        <Grid item container className={classes.formItem}>
                            <TextField
                                variant="outlined"
                                label={field.label}
                                InputLabelProps={{ shrink: field.type == "date" || props.userData[field.name] && props.userData[field.name]?.length !== 0 }}
                                onChange={props.handleInputChange} value={props.userData[field.name]}
                                name={field.name} type={field.type}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
            {props.editable.includes("Address") || (props.editable.includes("*") && !props.editable.includes("!Address")) ? <Grid container justify="space-evenly">
                <Grid container direction="column" style={{ marginTop: "2em" }} xs={10} sm={10} md={6} lg={6}>
                    <Typography>Address:</Typography>
                    {[
                        { label: "Street", name: "street" }, { label: "Street 2", name: "street2" }, { label: "City", name: "city" },
                        { label: "State", name: "state" }, { label: "Zip Code", name: "zip5" }
                    ].map(field => <TextField label={field.label} InputLabelProps={{ shrink: props.userData.Address?.[field.name] && props.userData.Address?.[field.name]?.length !== 0 }}
                        onChange={props.handleInputChange} value={props.userData?.Address?.[field.name]} name={`Address.${field.name}`} />)}
                </Grid>
            </Grid> : null}
        </Grid>
    )
}