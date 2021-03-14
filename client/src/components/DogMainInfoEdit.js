import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import SingleSelect from "../components/SingleSelect";
import MultiSelectChips from "../components/MultiSelectChips";
import UploadButton from "../components/UploadButton";
import MultiLineText from "../components/MultiLineText";
import Image from "../components/Image";
import EditButton from "../components/EditButton";

import dog from "../assets/Cool_Dog.png";


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
    numberItem: {
        marginBottom: "1em",
        minHeight: 60,
        maxWidth: 200
    },
    picContainer: {
        [theme.breakpoints.down("xs")]:{
            justifyContent: "center",
        },
        marginBottom: "2em"
    }
}));

export default function DogMainInfoEdit(props){
    const classes = useStyles();

    const [selectData, setSelectData] = useState({
        MicrochipMfgId: "",
        gender: ""
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
            gender: props.dogData.gender,
            MicrochipMfgId: props.dogData.MicrochipMfgId
        })
    },[props.dogData.MicrochipMfgId, props.dogData.gender])

    return(
        <Grid container justify="space-evenly" className={classes.picContainer}>
            <Grid item>
                <Image alt={"cool dog"} pic={dog} />
                <EditButton buttonText="Change Photo" toLink=""/>
            </Grid>
            <Grid item>
                <div className={classes.form}>
                    <Grid item container className={classes.formItem}>
                        <TextField variant="outlined" label="Name" InputLabelProps={{shrink: true}} onChange={props.handleInputChange} value={props.dogData?.name} name="name"/>
                    </Grid>
                    <Grid item container className={classes.formItem} direction="column">
                        <InputLabel id="birthday">Date of birth</InputLabel>
                        <TextField type="date" variant="outlined" labelId="birthday" InputLabelProps={{shrink: true}} onChange={props.handleInputChange} value={props.dogData?.dob} name="dob"/>
                    </Grid>
                        <Grid item style={{marginTop: "1em"}}>
                            <div>
                                <FormControl variant="outlined" style={{minWidth: 195, marginBottom: "1em"}}>
                                    <InputLabel id="gender">Gender</InputLabel>
                                    <Select
                                        labelId="gender"
                                        id="gender"
                                        onChange={handleSelectChange}
                                        value={selectData.gender}
                                        name="gender"
                                        label="Gender"
                                        InputLabelProps={{shrink: true}}
                                    >
                                        <MenuItem disabled value="">Gender</MenuItem>
                                        <MenuItem value="female">Female</MenuItem>
                                        <MenuItem value="male">Male</MenuItem>
                                    </Select>
                                </FormControl>

                            </div>
                        </Grid>
                    <Grid item container className={classes.numberItem}>
                        <Grid item style={{marginTop: "1em"}}>
                            <div>
                                <FormControl variant="outlined" style={{minWidth: 195, marginBottom: "1em"}}>
                                    <InputLabel id="microchipMfgList">Microchip Company</InputLabel>
                                    <Select
                                        labelId="microchipMfgList"
                                        id="microchipMfgList"
                                        InputLabelProps={{shrink: true}}
                                        name="MicrochipMfgId"
                                        value={selectData.MicrochipMfgId}
                                        onChange={handleSelectChange}
                                    >
                                        {/* {props.mfgList} */}
                                        <MenuItem disabled value="">Microchip Manufacturer</MenuItem>
                                        <MenuItem value={1}>24PetWatch Pet Protection Services</MenuItem>
                <MenuItem value={2}>911PetChip &amp; Free Pet Chip Registry</MenuItem>
                <MenuItem value={3}>ACA MARRS</MenuItem>
                <MenuItem value={4}>AKC Reunite</MenuItem>
                <MenuItem value={5}>aZoo.me Identification</MenuItem>
                <MenuItem value={6}>BC Pet Registry</MenuItem>
                <MenuItem value={7}>BeKind PetFind</MenuItem>
                <MenuItem value={8}>BuddyID</MenuItem>
                <MenuItem value={9}>EIDAP</MenuItem>
                <MenuItem value={10}>Emili</MenuItem>
                <MenuItem value={11}>Fi</MenuItem>
                <MenuItem value={12}>Found Animals</MenuItem>
                <MenuItem value={13}>Furreka</MenuItem>
                <MenuItem value={14}>HomeAgain</MenuItem>
                <MenuItem value={15}>Homeward Bound Pet</MenuItem>
                <MenuItem value={16}>Identrac Inc.</MenuItem>
                <MenuItem value={17}>International Pet Registry</MenuItem>
                <MenuItem value={18}>Microchip I.D. Solutions</MenuItem>
                <MenuItem value={19}>MyPetsChip</MenuItem>
                <MenuItem value={20}>Nanochip ID Inc.</MenuItem>
                <MenuItem value={21}>National Animal Identification Center</MenuItem>
                <MenuItem value={22}>Peeva</MenuItem>
                <MenuItem value={23}>PetKey</MenuItem>
                <MenuItem value={24}>PetLink</MenuItem>
                <MenuItem value={25}>Petstablished</MenuItem>
                <MenuItem value={26}>Prime Trackr</MenuItem>
                <MenuItem value={27}>Save This Life</MenuItem>
                <MenuItem value={28}>SmartTag Microchip</MenuItem>
                <MenuItem value={29}>uPet</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item container className={classes.numberItem}>
                        <TextField type="number" variant="outlined" label="Microchip ID" InputLabelProps={{shrink: true}} onChange={props.handleInputChange} value={props.dogData?.microchipId} name="microchipId"/>
                    </Grid>
                    <Grid item container className={classes.formItem}>
                        <TextField type="number" variant="outlined" label="ASF ID" InputLabelProps={{shrink: true}} onChange={props.handleInputChange} value={props.dogData?.asfId} name="asfId"/>
                    </Grid>
                    {/* <Grid item container className={classes.formItem}>
                        <TextField rows={4} multiline variant="outlined" label="About" onChange={e => setAbout(e.target.value)}/>
                    </Grid> */}
                </div>
            </Grid>
            
        </Grid>
    )
}