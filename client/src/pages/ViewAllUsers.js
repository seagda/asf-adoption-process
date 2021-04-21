import React, { useEffect, useState } from 'react'
import ViewAll from "./ViewAll";
import API from "../utils/API";
import UserFlow from "../components/UserFlow";

export default function ViewAllUsers() {
    const [data, setData] = useState([]);

    useEffect(() => {
        API.getUsersAll().then(res => {
            setData(res.data.map(user => ({
                ...user,
                name: `${user.firstName} ${user.lastName}`,
                Region: user.ResidesInRegion,
                coordinates: { lat: +user.Address.lat, lng: +user.Address.lng },
                city: user.Address.city,
                state: user.Address.state,
                region: user.ResidesInRegion.name,
                roles: user.Roles.map( (role) => role.name).join(", ")
            })))
        })
    }, []);

    return (
        <ViewAll title="View ASF Users"
            tableColumns={[
                { id: 'firstName', numeric: false, disablePadding: false, label: 'First Name' },
                { id: 'lastName', numeric: false, disablePadding: false, label: 'Last Name' },
                { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
                { id: 'city', numeric: false, disablePadding: false, label: 'City' },
                { id: 'state', numeric: false, disablePadding: false, label: 'State' },
                { id: 'region', numeric: false, disablePadding: false, label: 'Region' },
                { id: 'roles', numeric: false, disablePadding: false, label: 'Roles' }
            ]}
            viewLinkPrefix="/user/"
            canCreate={true} createText="Add User" createPath="/createUser"
            data={data}
            tableTitle="User Details"
            flow={<div style={{ height: 150, width: '100%' }} >
                <UserFlow />
            </div>}
            filter2Check={(selectedFilter2, obj) => selectedFilter2.some((selectedRole) => obj.Roles.some(role => role.id === selectedRole))}
            filter2Text="Role"
            loadDataFunction={API.getUsersAll} getFilter2List={API.getRoles} />
    )
}
