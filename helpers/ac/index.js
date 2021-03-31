const AccessControl = require("accesscontrol");

const ac = new AccessControl();

require("./user")(ac);
require("./rescuer")(ac);
require("./adopter")(ac);
require("./foster")(ac);
require("./placement")(ac);
require("./regional")(ac);
require("./transporter")(ac);
require("./superAdmin")(ac);
require("./admin")(ac);

module.exports = ac;