import React, { useEffect, useState } from 'react'
import ViewAll from "./ViewAll";
import API from "../utils/API";
import AppFlow from "../components/AppFlow";

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
                { id: 'id', label: 'ID', link: true },
                { id: 'name', label: 'Applicant' },
                { id: 'type', label: 'Application Type' },
                { id: 'status', label: 'Status' },
                { id: 'region', label: 'Region' },
                { id: 'createdAt', label: 'Date Created' },
                { id: 'updatedAt', label: 'Date Updated' }
            ]}
            viewLinkPrefix="/appResponse/"
            canCreate={false}
            data={data}
            tableTitle="Application Details"
            flow={<div style={{ height: 120, width: '100%' }} >
                <AppFlow />
            </div>}
            filter2Check={(selectedFilter2, obj) => selectedFilter2.includes(obj.AppStatus.id)}
            filter2Text="Status"
            getFilter2List={API.getAppStatuses} />
    )
}
