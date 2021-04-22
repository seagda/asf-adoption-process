import React, { useEffect, useState } from 'react'
import ViewAll from "./ViewAll";
import API from "../utils/API";
import DogAdoptionFlow from "../components/DogAdoptionFlow";

export default function ViewAllApps() {
    const [data, setData] = useState([]);

    useEffect(() => {
        API.getAllAppResponses().then(res => {
            console.log(res);
            setData(res.data.map(app => ({
                ...app,
                name: `${app.User.firstName} ${app.User.lastName}`,
                coordinates: { lat: +app.User.Address.lat, lng: +app.User.Address.lng },
                city: app.User.Address.city,
                state: app.User.Address.state,
                dog: app.ForDog?.name,
                type: app.AppType.name,
                region: app.User.ResidesInRegion.name,
                status: app.AppStatus.name,
                // TODO: set these up to sort properly
                createdAt: (new Date(app.createdAt)).toLocaleDateString(),
                updatedAt: (new Date(app.updatedAt)).toLocaleDateString()
            })))
        })
    }, []);

    return (
        <ViewAll title="Applications"
            tableColumns={[
                { id: 'id', label: 'ID' },
                { id: 'name', label: 'Applicant' },
                { id: 'type', label: 'Application Type' },
                { id: 'status', label: 'Status' },
                { id: 'region', label: 'Region' },
                { id: 'createdAt', label: 'Date Created' },
                { id: 'updatedAt', label: 'Date Updated' }
            ]}
            viewLinkPrefix="/viewDog/"
            canCreate={true} createText="Add Dog" createPath="/createDog"
            data={data}
            tableTitle="Dog Details"
            flow={<div style={{ height: 120, width: '100%' }} >
                <DogAdoptionFlow />
            </div>}
            filter2Check={(selectedFilter2, obj) => selectedFilter2.includes(obj.AppStatus.id)}
            filter2Text="Status"
            loadDataFunction={API.getAllAppResponses} getFilter2List={API.getAppStatuses} />
    )
}
