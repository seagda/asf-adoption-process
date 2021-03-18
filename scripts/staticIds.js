//Create a numerical constant files for role associations

const STATIC_IDS = 
{ ROLES:{
      USER:1,
       RESCUER:2,
       ADOPTER:3,
       FOSTER:4,
       PLACEMENT:5,
       REGIONAL:6,
       SUPERADMIN:7,
       ADMIN:8,
       TRANSPORTER:9,
       VOLUNTEER:10
    },

    APP_STATUS: {
        APP_RECEIVED:1,
        BG_CHECKED:2,
        REF_CHECKED:3,
        APPROVED:4,
        AUTO_REJECT:5,
        ASF_DECLINE:6,
        INV_SENT:7
    },

    DOG_STATUS: {
        PENDING:1,
        FOSTER_READY:2,
        IN_FOSTER:3,
        ALMOST_READY:4,
        READY_TO_ADOPT:5,
        FOSTER_TO_ADOPT:6,
        ADOPTED:7
    }}

module.exports = STATIC_IDS;