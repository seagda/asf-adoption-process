const AccessControl = require("accesscontrol");

const ac = new AccessControl();

require("./adopter")(ac);
require("./user")(ac);
require("./superAdmin")(ac);

module.exports = ac;