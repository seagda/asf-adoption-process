import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import PieChartLegend from "../components/PieChartLegend";

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

export default function LegendContainer(){
    const classes = useStyles();

    return (
        <Grid container justify="space-evenly" style={{marginTop: "4em"}}>
            <Grid item>
                <PieChartLegend />
            </Grid>
            <Grid item>
                <PieChartLegend />
            </Grid>
            <Grid item>
                <PieChartLegend />
            </Grid>
        </Grid>
    )
}