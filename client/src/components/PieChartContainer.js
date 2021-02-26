import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import PieChart from "../components/PieChart";

const useStyles = makeStyles(theme => ({
    itemContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
            alignItems: "center"
        }
    },
    form: {
        paddingRight: "3em",
        [theme.breakpoints.down("sm")]:{
            padding: "1em"
        }
    },
    formItem: {
        marginBottom: "2em"
    },
    picContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
        }
    }
}))

export default function QuickActions(){
    const classes = useStyles();

    return (
        <Grid container justify="space-evenly" style={{marginTop: "4em"}}>
            <Grid item>
                <PieChart />
            </Grid>
            <Grid item>
                <PieChart />
            </Grid>
            <Grid item>
                <PieChart />
            </Grid>
        </Grid>
    )
}