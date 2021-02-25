ac.grant("user").readOwn("User", ["*", "!password", "!blocked", "!adminNotes"])
    .readOwn("Dog")
    .readOwn("AppResponse")
    .readOwn("AppQuestion")
    .readOwn("AppTypes")
    .readOwn("Address")
    .readOwn("Familymember");