const axios = require("axios")

function getHeaders(){
    const userString = localStorage.getItem("user")
    if(!userString){
        window.location = "/"
        return null
    } 
    return {headers: {"x-access-token": JSON.parse(userString).accessToken}}
}

// function handle401(err){
//     console.error(err)
//     if(err.status === 401){
//         window.location.href = "/"
//     } else {
//         return err
//     }
// }

const API = {
    login: function(userData){
        return axios.post(`/auth/signin`, userData)
    },
    signup: function(userData){
        return axios.post(`/auth/signup`, userData)
    },
    createDog: function(dogData){
        return axios.post(`/api/dog`, dogData, getHeaders())
    }, 
    createUser: function(userData){
        return axios.post(`/api/user/new`, userData, getHeaders())
    },
    getAppQuestions: function(type){
        return axios.get(`/api/app/${type}/questions`, getHeaders())
    },
    sendAppData: function(response, AppTypeId, ForDogId){
        return axios.post(`/api/user/app-response`, {response, AppTypeId}, getHeaders())
    },
    getAllAppResponses: function() {
        return axios.get("/api/user/app-response", getHeaders())
    },
    getAppStatuses: function() {
        return axios.get("/api/app/statuses", getHeaders())
    },
    getUserAppResponses: function(userId) {
        return axios.get(`/api/user/${userId}/app-responses`, getHeaders())
    },
    getMyAppResponses: function() {
        return this.getUserAppResponses("me")
    },
    getAppResponse: function(id) {
        return axios.get(`/api/user/app-response/${id}`, getHeaders())
    },
    getBehaviorQuestions: function (){
        return axios.get(`/api/dog/assess/questions`, getHeaders())
    },
    sendBehaviorForm: function (response,dogId, date){
        return axios.post(`/api/dog/assess/${dogId}`, {response, date}, getHeaders())
    },

    getMyUserData: function(){
        return axios.get(`/api/user/me`, getHeaders())
    },
    updateMyUserData: function(userData){
        return axios.put(`/api/user/me`, userData, getHeaders())
    },
    getSingleDogData: function(dogId){
        return axios.get(`/api/dog/${dogId}`, getHeaders())
    },
    updateDogInfo: function(dogData, dogId){
        return axios.put(`/api/dog/${dogId}`, dogData, getHeaders())
    },
    microchipMfgGetAll: function(){
        return axios.get("/api/dog/microchip-mfg", getHeaders())
    },

    getDogDossiersAll: function() {
        return axios.get("/api/dog", getHeaders())
    },
    getExtContact: function(){
        return axios.get(`/api/contact`, getHeaders())
    },
    getRegions: function(){
        return axios.get(`/api/region`, getHeaders())
    },
    getDogStatus: function(){
        return axios.get(`/api/dog/status`, getHeaders())
    },
    getRoles: function(){
        return axios.get(`/api/role`, getHeaders())
    },
    getUsersAll: function(){
        return axios.get(`/api/user`, getHeaders())
    },
    getDashboardData: function(){
        return axios.get(`/api/dashboard`, getHeaders())
    },
    getDogDocs: function(dogId){
        return axios.get(`/api/dog/${dogId}/documents`, getHeaders())
    },
    getBehaviorAnswers: function(dogId){
        return axios.get(`/api/dog/${dogId}/assessments`, getHeaders())
    },
    getSingleAssessment: function(assessId){
        return axios.get(`/api/dog/assess/${assessId}`, getHeaders())
    },
    getSingleUser: function (userId){
        return axios.get(`/api/user/${userId}`, getHeaders())
    },
    updateOtherUser: function (userData, userId){
        return axios.put(`/api/user/${userId}`, userData, getHeaders())
    },
    createDocuments: function (files, dogId){
        const formData = new FormData()
        for (let i = 0; i < files.length; i++) formData.append(i, files[i])
        return axios.post(`/api/dog/document/${dogId}`, formData, getHeaders())
    },
    getDocument: function (id){
         return axios.get(`/api/dog/document/${id}`, {...getHeaders(), responseType: "blob"})
    },
    getProfilePhoto: function (id){
        return axios.get(`/api/user/${id}/photo`, {...getHeaders(), responseType: "blob"})
    },
    setProfilePhoto: function (photo, id){
        const formData = new FormData()
        formData.append("photo", photo)
        return axios.post(`/api/user/${id}/photo`, formData, getHeaders())
    },
    getMyProfilePhoto: function (){
        return this.getProfilePhoto("me");
    },
    setMyProfilePhoto: function (photo){
        return this.setProfilePhoto(photo, "me");
    }
}

export default API;