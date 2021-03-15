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
import UserStatusEdit from "../components/UserStatusEdit";
import UserCapacityEdit from "../components/UserCapacityEdit";
import UserCaresForEdit from "../components/UserCaresForEdit";
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
    const admin = true;
    const roles = [{role: "Adopter"}, {role: "Foster"}];
    const names = ["Adopter", "Foster", "Regional", "Volunteer", "Rescuer", "Transporter", "Placement"]

    const [userIntakeData, setUserIntakeData] = useState({})
    const createUserInputChange = event =>{
        const {name,value} = event.target
        setUserIntakeData({
            ...userIntakeData,
            [name]: value
        })
    }

    const [addressFormData, setAddressFormData] = useState({})

    const handleAddressInputChange = event =>{
        const {name, value} = event.target
        setAddressFormData({
            ...addressFormData,
            [name]: value
        })
    }

    const [isActiveData, setIsActiveData] = useState({});
    const handleActiveChange = (event) => {
      const {name, value} = event.target
      console.log(value)
      setIsActiveData({
          ...isActiveData,
          [name]: value
      })
    };

    const [isBlockedData, setIsBlockedData] = useState({});
    const handleBlockedChange = (event) => {
      const {name, value} = event.target
      setIsBlockedData({
          ...isBlockedData,
          [name]: value
      })
    };

    const [caresForPuppiesData, setCaresForPuppiesData] = useState({});
    const handlePuppiesChange = (event) => {
      const {name, value} = event.target
      setCaresForPuppiesData({
          ...caresForPuppiesData,
          [name]: value
      })
    };

    const [caresForAdultsData, setCaresForAdultsData] = useState({});
    const handleAdultsChange = (event) => {
      const {name, value} = event.target
      setCaresForAdultsData({
          ...caresForAdultsData,
          [name]: value
      })
    };

    const [caresForSeniorsData, setCaresForSeniorsData] = useState({});
    const handleSeniorsChange = (event) => {
      const {name, value} = event.target
      setCaresForSeniorsData({
          ...caresForSeniorsData,
          [name]: value
      })
    };

    const [withMedIssuesData, setWithMedIssuesData] = useState({});
    const handleMedIssuesChange = (event) => {
      const {name, value} = event.target
      setWithMedIssuesData({
          ...withMedIssuesData,
          [name]: value
      })
    };

    const [withBehaviorIssuesData, setWithBehaviorIssuesData] = useState({});
    const handleBehaviorChange = (event) => {
      const {name, value} = event.target
      setWithBehaviorIssuesData({
          ...withBehaviorIssuesData,
          [name]: value
      })
    };

    const [onHoldData, setOnHoldData] = useState({});
    const handleHoldChange = (event) => {
      const {name, value} = event.target
      setOnHoldData({
          ...onHoldData,
          [name]: value
      })
    };

    useEffect(()=>{
        setUserIntakeData({
            firstName: props.userData?.firstName, 
            lastName: props.userData?.lastName,
            phone: props.userData?.phone,
            email: props.userData?.email,
            dob: props.userData?.dob,
            maxCapacity: props.userData?.maxCapacity
        })
        setIsActiveData({active: false})
        console.log(isActiveData)
    }, [props.userData])


    const handleUserIntakeFormSubmit = event =>{
        event.preventDefault();
        const userInfo = {
            ...userIntakeData,
            ...isActiveData,
            ...isBlockedData,
            ...caresForPuppiesData,
            ...caresForAdultsData,
            ...caresForSeniorsData,
            ...withMedIssuesData,
            ...withBehaviorIssuesData,
            ...onHoldData,
            Address: addressFormData
        }
        props.submitFunction(userInfo)
        .then(res =>{
            console.log(res.data)
            setUserIntakeData({})
            setIsActiveData({})
            setIsBlockedData({})
            setCaresForPuppiesData({})
            setCaresForAdultsData({})
            setCaresForSeniorsData({})
            setWithMedIssuesData({})
            setWithBehaviorIssuesData({})
            setOnHoldData({})
            setAddressFormData({})
            window.location = "/Manage-ASF-Users"
        }).catch(err=>{
            console.error(err.response.data.message)
            // alert("Create dog failed")
        })
    }


    // const roleEdit = (
    //     <Grid item container className={classes.itemContainer}>
    //     <Grid container style={{marginTop: "1em"}}>
    //         <Grid item>
    //             <Typography variant="h4">Role Title</Typography>
    //         </Grid>
    //     </Grid>
    //     <Grid container justify="space-between">
    //         <Grid item style={{marginTop: "1em"}}>
    //             {roles.map((role)=> (
    //                 <RoleTitles
    //                 label={role.role}
    //                 />
    //             ))}
    //         </Grid>
    //         <Grid item>
    //             <MultiSelectChips names={names} title="Add Role(s)"/>
    //         </Grid>
    //     </Grid>
    // </Grid>
    // )


    // const references = (
    //     <Grid item container justify="space-evenly" className={classes.references}>
    //         <Grid item style={{marginTop: "1em", marginBottom: "5em"}}> 
    //             <Card className={classes.root}>
    //                 <CardContent>
    //                     <Typography variant="h5" component="h2">
    //                         Reference #1
    //                     </Typography>
    //                     <div>
    //                     <TextField variant="outlined" label="Name" onChange={e => setRef1Name(e.target.value)}/>
    //                     <TextField type="number" variant="outlined" label="Phone" onChange={e => setRef1Phone(e.target.value)}/>
    //                     <TextField variant="outlined" label="Email" onChange={e => setRef1Email(e.target.value)}/>
    //                     </div>
    //                 </CardContent>
    //                     {admin ? <CardContent><HoldCheckbox label="Contaced successfully"/></CardContent> : null}
    //                     {admin ? <CardContent><HoldCheckbox label="Approved"/></CardContent> : null}
    //                     {admin ? <CardContent>Notes:</CardContent> : null}
    //                 <CardContent>
    //                     {admin ? <div><TextField rows={4} multiline variant="outlined" label="New notes" onChange={e => setRef1Notes(e.target.value)}/></div> : null}
    //                 </CardContent>
    //             </Card>
    //             <Card className={classes.root}>
    //                 <CardContent>
    //                     <Typography variant="h5" component="h2">
    //                         Reference #2
    //                     </Typography>
    //                     <div>
    //                     <TextField variant="outlined" label="Name" onChange={e => setRef2Name(e.target.value)}/>
    //                     <TextField type="number" variant="outlined" label="Phone" onChange={e => setRef2Phone(e.target.value)}/>
    //                     <TextField variant="outlined" label="Email" onChange={e => setRef2Email(e.target.value)}/>
    //                     </div>
    //                 </CardContent>
    //                     {admin ? <CardContent><HoldCheckbox label="Contaced successfully"/></CardContent> : null}
    //                     {admin ? <CardContent><HoldCheckbox label="Approved"/></CardContent> : null}
    //                     {admin ? <CardContent>Notes:</CardContent> : null}
    //                 <CardContent>
    //                     {admin ? <div><TextField rows={4} multiline variant="outlined" label="New notes" onChange={e => setRef2Notes(e.target.value)}/></div> : null}
    //                 </CardContent>
    //             </Card>
    //             <Card className={classes.root}>
    //                 <CardContent>
    //                     <Typography variant="h5" component="h2">
    //                         Reference #3
    //                     </Typography>
    //                     <div>
    //                     <TextField variant="outlined" label="Name" onChange={e => setRef3Name(e.target.value)}/>
    //                     <TextField type="number" variant="outlined" label="Phone" onChange={e => setRef3Phone(e.target.value)}/>
    //                     <TextField variant="outlined" label="Email" onChange={e => setRef3Email(e.target.value)}/>
    //                     </div>
    //                 </CardContent>
    //                     {admin ? <CardContent><HoldCheckbox label="Contaced successfully"/></CardContent> : null}
    //                     {admin ? <CardContent><HoldCheckbox label="Approved"/></CardContent> : null}
    //                     {admin ? <CardContent>Notes:</CardContent> : null}
    //                 <CardContent>
    //                     {admin ? <div><TextField rows={4} multiline variant="outlined" label="New notes" onChange={e => setRef3Notes(e.target.value)}/></div> : null}
    //                 </CardContent>
    //             </Card>
    //         </Grid>
    //     </Grid>
    // )

    // const adminNotes = (
    //     <Grid item container className={classes.itemContainer, classes.marginFix}>
    //     <Grid container>
    //         <Grid item style={{marginTop: "3em"}}>
    //             <Typography variant="h4">Admin Notes</Typography>
    //             <Divider/>
    //         </Grid>
    //     </Grid>
    //     <Grid container>
    //         <Grid item container style={{marginTop: "1em"}} justify="center">
    //             <TextField className={classes.largeTextfield} InputLabelProps={{shrink: true}} label="Admin Notes" rows={6} multiline variant="outlined" onChange={createUserInputChange} value={userIntakeData.adminNotes} name="adminNotes"/>
    //         </Grid>
    //     </Grid>
    // </Grid>
    // )

    return (
        <form onSubmit={handleUserIntakeFormSubmit}>
        <Grid item container className={classes.itemContainer}>
        <Grid container justify="space-evenly" className={classes.picContainer}>
            <UserMainInfoEdit
            handleInputChange={props.handleInputChange}
            userData={props.userData}
            addressChange={handleAddressInputChange}
            streetValue={addressFormData.street}
            cityValue={addressFormData.city}
            stateValue={addressFormData.state}
            zipValue={addressFormData.zip5}
            />

            <UserStatusEdit
            handleInputChange={props.handleInputChange}
            userData={props.userData}
            activeChange={handleActiveChange}
            activeValue={isActiveData.active}
            blockChange={handleBlockedChange}
            blockedValue={isBlockedData.blocked}
            holdChange={handleHoldChange}
            holdValue={onHoldData.hold}
            />

        </Grid>

        <UserCapacityEdit
        handleInputChange={props.handleInputChange}
        userData={props.userData}
        />

        <UserCaresForEdit
        puppiesChange={handlePuppiesChange}
        puppiesValue={caresForPuppiesData.puppies}
        adultsChange={handleAdultsChange}
        adultsValue={caresForAdultsData.adults}
        seniorsChange={handleSeniorsChange}
        seniorsValue={caresForSeniorsData.seniors}
        behaviorChange={handleBehaviorChange}
        behaviorValue={withBehaviorIssuesData.withBehaviorIssues}
        medicalChange={handleMedIssuesChange}
        medicalValue={withMedIssuesData.withMedicalIssues}
        />

        {/* <Grid item>
            <Typography variant="h4">References</Typography>
            <Divider/>
        </Grid>
        {references} */}
        {/* {adminNotes} */}
        <Grid item container className={classes.formItem} justify={"flex-end"}>
            <SaveButton buttonText="Save Changes"/>
        </Grid>
    </Grid>
    </form>
    )
}