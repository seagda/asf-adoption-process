import React, {useState, useCallback} from "react";
import "survey-react/survey.css";
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import FosterApp from "../components/applications/FosterApp";
import API from "../utils/API";

const useStyles=makeStyles(theme => ({
    mainContainer: {
        marginLeft: theme.spacing(35),
        marginTop: theme.spacing(13),
        width: "70%",
        [theme.breakpoints.down("md")]:{
            width: "80%"
        },
        [theme.breakpoints.down("sm")]:{
            width: "100%"
        },
        [theme.breakpoints.down("xs")]:{
            spacing: theme.spacing(2),
            marginLeft: 0
        }
    }
}))

export default function FosterApplication (){
    const classes = useStyles();
    const [showPage, setShowPage] = useState(true);

    const onCompletePage = useCallback((data)=>{
        API.sendAppData(data, 2);
        setShowPage(!showPage)
    }, [showPage])

    const setFinalPage = ()=>{
        return(
            <Grid item>
                <Typography variant="h5">Thanks for completing the application!</Typography>
                <Typography variant="h5">An ASF team member will contact you soon.</Typography>
            </Grid>
        )
    }

    return(
        <Grid container className={classes.mainContainer}>
            <Typography variant="h4" color="primary">Foster Application</Typography>
            {showPage ? <FosterApp
            showCompletedPage={data=>onCompletePage(data)}
            /> : setFinalPage()}
        </Grid>
    )
}