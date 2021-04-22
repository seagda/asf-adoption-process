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
                status: dog.DogStatus.name
            })))
        })
    }, []);

    return (
        <ViewAll title="Dog Dossiers"
            tableColumns={[
                { id: 'id', label: 'Id' },
                { id: 'name', label: 'Dog Name' },
                { id: 'currentlyWith', label: 'In Care Of' },
                { id: 'city', label: 'City' },
                { id: 'state', label: 'State' },
                { id: 'gender', label: 'Gender' },
                { id: 'dob', label: 'Date of Birth' },
                { id: 'region', label: 'Region' },
                { id: 'status', label: 'Status' },
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
