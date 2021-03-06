module.exports = ac => {
    ac.grant("User")
        .readOwn("Dog", ["*", "!pullCost", "!adminNotes"])
        .createOwn("Address", ["*"])
        .readOwn("Address", ["*"])
        .updateOwn("Address", ["*"])
        .readOwn("Alert", ["*"])
        .updateOwn("Alert", ["read"])
        .readAny("AppQuestion", ["*"])
        .createOwn("AppResponse", ["*", "!AppStatus", "!AppStatusId", "!invoicePaid"])
        .readOwn("AppResponse", ["*"])
        .readAny("AppType", ["*"])
        .createOwn("Document", ["name", "DogId", "MediStatusId"])
        .readOwn("Document", ["name", "DogId", "MediStatusId"])
        .createOwn("Familymember", ["*"])
        .readOwn("Event", ["*"])
        .readOwn("ExtContact", ["*"])
        .readOwn("Familymember", ["*"])
        .updateOwn("Familymember", ["*"])
        .deleteOwn("Familymember", ["*"])
        .readOwn("User", ["Address", "Alerts", "AppResponses", "CurrentlyWith", "Setting", "Roles", "AssignedRegions", "ResidesInRegion", "email", "phone", "firstName", "lastName", "dob", "active", "blocked", "maxCapacity", "puppies", "adults", "seniors", "withBehaviorIssues", "withMedicalIssues", "hold", "photo"])
        .updateOwn("User", ["ResidesInRegionId", "email", "phone", "firstName", "lastName", "dob", "hold", "photo"])
        .createOwn("Reference", ["fullName", "email", "phone"])
        .readOwn("Reference", ["*", "!notes"])
        .updateOwn("Reference", ["fullName", "email", "phone"])
        .deleteOwn("Reference", ["*"])
        .readOwn("Region", ["*"])
};