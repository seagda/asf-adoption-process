import React, { useEffect, useState } from 'react'
import ViewAll from "./ViewAll";
import API from "../utils/API";
import DogAdoptionFlow from "../components/DogAdoptionFlow";

export default function ViewAllDogs() {
    const [data, setData] = useState([]);

    useEffect(() => {
        API.getDogDossiersAll().then(res => {
            setData(res.data.map(dog => ({
                ...dog,
                coordinates: { lat: +dog.Address.lat, lng: +dog.Address.lng },
                city: dog.Address.city,
                state: dog.Address.state,
                region: dog.Region.name,
                currentlyWith: dog.CurrentlyWith ? `${dog.CurrentlyWith.firstName} ${dog.CurrentlyWith.lastName}` : "Not Assigned",
                status: dog.DogStatus.name,
                city: dog.Address.city,
                state: dog.Address.state
            })))
        })
    }, []);

    return (
        <ViewAll title="Dog Dossiers"
            tableColumns={[
                { id: 'id', numeric: true, disablePadding: true, label: 'Id' },
                { id: 'name', numeric: false, disablePadding: false, label: 'Dog Name' },
                { id: 'currentlyWith', numeric: false, disablePadding: false, label: 'In Care Of' },
                { id: 'city', numeric: false, disablePadding: false, label: 'City' },
                { id: 'state', numeric: false, disablePadding: false, label: 'State' },
                { id: 'gender', numeric: false, disablePadding: false, label: 'Gender' },
                { id: 'dob', numeric: false, disablePadding: false, label: 'Date of Birth' },
                { id: 'region', numeric: false, disablePadding: false, label: 'Region' },
                { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
              ]}
            viewLinkPrefix="/viewDog/"
            canCreate={true} createText="Add Dog" createPath="/createDog"
            data={data}
            tableTitle="Dog Details"
            flow={<div style={{ height: 120, width: '100%' }} >
                <DogAdoptionFlow />
            </div>}
            filter2Check={(selectedFilter2, obj) => selectedFilter2.includes(obj.DogStatus.id)}
            filter2Text="Status"
            loadDataFunction={API.getDogDossiersAll} getFilter2List={API.getDogStatus} />
    )
}
