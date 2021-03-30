import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";

import API from "../utils/API";
import ProfileBlock from "../components/ProfileBlock";
import ProfileActions from "../components/ProfileActions";
import CapacityView from "../components/CapacityView";
import Roles from "../components/Roles";
import UserAddress from "../components/UserAddress";
import AdminNotes from "../components/AdminNotes";
const useStyles=makeStyles(theme => ({
    mainContainer: {
        marginLeft: theme.spacing(35),
        marginTop: theme.spacing(13),
        marginBottom: "5em",
        width: "70%",
        [theme.breakpoints.down("md")]:{
            width: "80%"
        },
        [theme.breakpoints.down("sm")]:{
            width: "80%"
        },
        [theme.breakpoints.down("xs")]:{
            spacing: theme.spacing(2),
            marginLeft: "3.5em"
        }
    }
}))

export default function UserProfileView(props){
    const classes = useStyles();

    const [appResponses, setAppResponses] = useState([]);

    useEffect(() => {
        API.getUserAppResponses(props.id).then(res => {
            setAppResponses(res.data)
            console.log(res.data)
        }).catch(console.error)
    }, [props.id])

    return(
        <Grid container className={classes.mainContainer}>
            <Grid item style={{marginBottom: "3em"}}>
                <Typography variant="h4" color="primary">{props.userData?.firstName}'s profile</Typography>
                <Divider/>
            </Grid>

            <ProfileBlock
                image={props.photoUrl}
                firstName={props.userData?.firstName}
                lastName={props.userData?.lastName}
                phone={props.userData?.phone}
                email={props.userData?.email}
                dob={props.userData?.dob}
            />

            {props.userData?.editable?.length ? <ProfileActions roles={props.userData?.Roles?.map((role)=>role.name)} id={props.id}/> : null}

            <UserAddress
                region={props.userData?.ResidesInRegion?.name}
                street={props.userData?.Address?.street}
                street2={props.userData?.Address?.street2}
                city={props.userData?.Address?.city}
                state={props.userData?.Address?.state}
                zip={props.userData?.Address?.zip5}
            />

            <Roles
            roles={props.userData?.Roles?.map((role)=><Chip key={role.id} label={role.name}/>)}
            />

            {/* TODO: make this look good */}
            {appResponses.length ? <Grid item container className={classes.itemContainer}>
            <Grid item container style={{marginTop: "3em"}} direction="column">
                    <Grid item>
                        <Typography variant="h4">Applications</Typography>
                        <Divider/>
                    </Grid>
                    <Grid item container>
                        <Grid container>
                            <Grid item container direction="column" style={{marginTop: "2em"}} xs={10}>
                                {appResponses.map(response => <Link to={`/appResponse/${response.id}`} key={response.id}><p>Application status: {response.AppStatus.name}, Application type: {response.AppType.name}</p></Link>)}
                            </Grid>
                        </Grid>
                    </Grid>
            </Grid>
        </Grid> : null}

            <CapacityView style={{ marginBottom: "5em" }}
                maxCapacity={props.userData?.maxCapacity}
                puppies={props.userData?.puppies}
                seniors={props.userData?.seniors}
                adults={props.userData?.adults}
                behavior={props.userData?.withBehaviorIssues}
                medical={props.userData?.withMedicalIssues}
            />

            {props.userData?.adminNotes !== undefined ? <AdminNotes notes={props.userData?.adminNotes} /> : null}

        </Grid>
    )
}