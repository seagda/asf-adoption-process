import React, {useState, useEffect, Component} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import InputLabel from "@material-ui/core/InputLabel";

import Image from "../components/Image";
import EditButton from "../components/EditButton";
import SaveButton from "../components/SaveButton";
import RoleTitles from "../components/RoleTitles";
import MultiSelectChips from "../components/MultiSelectChips";
import HoldCheckbox from "../components/HoldCheckbox";
import SelectBooleanBlock from "../components/SelectBooleanBlock";
import UserCapacityEdit from "../components/UserCapacityEdit";
import UserMainInfoEdit from "../components/UserMainInfoEdit";

import ashley from "../assets/ashley.jpg";

const useStyles = makeStyles(theme => ({
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
    references: {
        [theme.breakpoints.down("xs")]:{
            marginLeft: "5em"
        }
    },
    root: {
        marginBottom: "1em",
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        }
    },
    largeTextfield: {
        minWidth: "60em",
        [theme.breakpoints.down("sm")]:{
            minWidth: "20em"
        }
    },
    marginFix: {
        [theme.breakpoints.down("sm")]: {
            marginLeft: "2.5em"
        }
    }
}))

export default function ProfileForm(props){
    const classes = useStyles();

    return (
        <form onSubmit={props.submitFunction}>
        <Grid item container className={classes.itemContainer}>
        <Grid container justify="space-evenly" className={classes.picContainer}>
            <UserMainInfoEdit
            handleInputChange={props.handleInputChange}
            handleAddressChange={props.handleAddressChange}
            userData={props.userData}
            editable={props.editable}
            photoUrl={props.photoUrl}
            handlePhotoChange={props.handlePhotoChange}
            />

            {(props.editable.includes("*") && !["!active", "!blocked", "!hold"].every(field => props.editable.includes(field))) ||
                ["active", "blocked", "hold"].some(field => props.editable.includes(field)) ?
                <SelectBooleanBlock
                    handleInputChange={props.handleInputChange}
                    data={props.userData}
                    editable={props.editable}
                    fields={[{name: "active", label: "Is active?"}, {name: "blocked", label: "Is blocked?"}, {name: "hold", label: "Is on hold?"}]
                        .filter(field => props.editable.includes(field.name) || (props.editable.includes("*") && !props.editable.includes(`!${field.name}`)))}
                /> : null
            }

        </Grid>

        {props.editable.includes("maxCapacity") || (props.editable.includes("*") && !props.editable.includes("!maxCapacity")) ?
            <UserCapacityEdit
                handleInputChange={props.handleInputChange}
                userData={props.userData}
            /> : null
        }

        {(props.editable.includes("*") && !["!puppies", "!adults", "!seniors", "!withBehaviorIssues", "!withMedicalIssues"].every(field => props.editable.includes(field))) ||
            ["puppies", "adults", "seniors", "withBehaviorIssues", "withMedicalIssues"].some(field => props.editable.includes(field)) ?
            <SelectBooleanBlock
                handleInputChange={props.handleInputChange}
                data={props.userData}
                editable={props.editable}
                fields={[{name: "puppies", label: "Puppies?"}, {name: "adults", label: "Adults?"}, {name: "seniors", label: "Seniors?"}, {name: "withBehaviorIssues", label: "With behavior issues?"}, {name: "withMedicalIssues", label: "With medical issues?"}]
                    .filter(field => props.editable.includes(field.name) || (props.editable.includes("*") && !props.editable.includes(`!${field.name}`)))}
            /> : null
        }
        
        <Grid item container className={classes.formItem} justify={"flex-end"}>
            <SaveButton buttonText="Save Changes"/>
        </Grid>
    </Grid>
    </form>
    )
}