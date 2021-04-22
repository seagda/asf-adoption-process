import React, { useEffect, useState } from 'react'
import ViewAll from "./ViewAll";
import API from "../utils/API";
import UserFlow from "../components/AppFlow";

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
                roles: user.Roles.map((role) => role.name).join(", ")
            })))
        })
    }, []);

    return (
        <ViewAll title="View ASF Users"
            tableColumns={[
                { id: 'firstName', label: 'First Name', link: true },
                { id: 'lastName', label: 'Last Name', link: true },
                { id: 'email', label: 'Email' },
                { id: 'city', label: 'City' },
                { id: 'state', label: 'State' },
                { id: 'region', label: 'Region' },
                { id: 'roles', label: 'Roles' }
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
