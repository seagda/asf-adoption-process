import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AddButton from '../components/AddButton'
import MultiSelectChips from '../components/MultiSelectChips';
import OverviewTable from '../components/OverviewTable';
import SearchBar from "../components/SearchBar";
import Hidden from '@material-ui/core/Hidden';
import API from '../utils/API';
import DogMap from '../components/DogMap';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        marginLeft: theme.spacing(35),
        marginTop: theme.spacing(13),
        width: "70%",
        [theme.breakpoints.down("md")]: {
            width: "80%"
        },
        [theme.breakpoints.down("sm")]: {
            width: "100%"
        },
        [theme.breakpoints.down("xs")]: {
            spacing: theme.spacing(2),
            marginLeft: 5
        }
    }
}))

export default function ViewAll(props) {
    const [error, setError] = useState("");

    const [selectedRegions, setRegion] = React.useState([]);
    const [regions, setRegionList] = React.useState([]);

    const [selectedFilter2, setSelectedFilter2] = React.useState([]);
    const [filter2List, setFilter2List] = React.useState([]);

    const [search, setSearch] = React.useState("");
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(loadData, [])

    function loadData() {

        API.getRegions()
            .then(res => {
                setRegionList(res.data)
            })
            .catch(err => console.log(err));

        props.getFilter2List()
            .then(res => {
                setFilter2List(res.data)
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        setFilteredData(props.data.filter((obj) => {
            if (selectedRegions.length > 0 && !selectedRegions.includes(obj.Region?.id)) {
                return false;
            }
            if (selectedFilter2.length > 0 && !props.filter2Check(selectedFilter2, obj)) {
                return false;
            }
            if (!(parseInt(search) === obj.id || obj.name.toLowerCase().includes(search.toLowerCase()))) {
                return false;
            }
            return true;
        }))
    }, [props.data, selectedRegions, selectedFilter2, search]);

    const handleRegionChange = (event) => {
        setRegion(event.target.value);
    };
    const handleFilter2Change = (event) => {
        setSelectedFilter2(event.target.value);
    };
    const handleSearchInputChange = (event) => {
        setSearch(event.target.value);
    };

    const classes = useStyles()
    return (

        <Grid container className={classes.mainContainer}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h3" component="h4" gutterBottom align="center" color="primary">
                        {props.title}
                        <Divider />
                    </Typography>
                </Grid>
                <Grid item xs={4} s={4} m={8} lg={10} />
                {props.canCreate ? <Grid item xs={8} s={8} m={4} lg={2}>
                    <AddButton buttonText={props.createText} toLink={props.createPath} />
                </Grid> : null}
                <Grid item xs={12}>
                    <SearchBar onChange={handleSearchInputChange} />
                </Grid>
                <Grid item xs={12} s={12} m={6} lg={6}>
                    <MultiSelectChips options={regions} title="Region" selectedOption={selectedRegions} onOptionChange={handleRegionChange} />
                </Grid>
                <Grid item xs={12} s={12} m={6} lg={6}>
                    <MultiSelectChips options={filter2List} title={props.filter2Text} selectedOption={selectedFilter2} onOptionChange={handleFilter2Change} />
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={12} justifyContent="center" >
                    <Hidden smDown>
                        {props.flow}
                    </Hidden>
                </Grid>
                <Grid item xs={12}>
                    <OverviewTable rows={filteredData} title={props.tableTitle} columns={props.tableColumns} linkPrefix={props.viewLinkPrefix} />
                </Grid>
                <Grid item xs={12}>
                    <DogMap displaySubjects={filteredData} />
                </Grid>
            </Grid>
        </Grid>

    )
}