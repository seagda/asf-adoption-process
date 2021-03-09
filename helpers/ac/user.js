module.exports = ac => {
    ac.grant("User")
        .readOwn("Dog")
        .createOwn("Address")
        .readOwn("Address")
        .updateOwn("Address")
        .readOwn("Alert")
        .updateOwn("Alert", ["read"])
        .readAny("AppQuestion")
        .createOwn("AppResponse", ["*", "!AppStatus", "!AppStatusId"])
        .readOwn("AppResponse")
        .readAny("AppType")
        .createOwn("Familymember")
        .readOwn("Event")
        .readOwn("ExtContact")
        .readOwn("Familymember")
        .updateOwn("Familymember")
        .deleteOwn("Familymember")
        .readOwn("User", ["*", "!blocked", "!adminNotes"])
        .updateOwn("User", ["*", "!active", "!blocked", "!adminNotes", "!maxCapacity", "!puppies", "!adults", "!seniors", "!withBehaviorIssues", "!withMedicalIssues"])
        .createOwn("Reference", ["fullName", "email", "phone"])
        .readOwn("Reference", ["*", "!notes"])
        .updateOwn("Reference", ["fullName", "email", "phone"])
        .deleteOwn("Reference")
        .readOwn("Region")
};