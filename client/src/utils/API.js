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
    getAdopterApp: function(){
        return axios.get(`/api/app/adopter/questions`, getHeaders())
    },
    getFosterApp: function(){
        return axios.get(`/api/app/foster/questions`, getHeaders())
    },
    sendAppData: function(response, AppTypeId){
        return axios.post(`/api/user/app-response`, {response, AppTypeId}, getHeaders())
    },
    getUserAppResponses: function(userId) {
        return axios.get(`/api/user/app-response/user/${userId}`, getHeaders())
    },
    getMyAppResponses: function() {
        return axios.get(`/api/user/app-response/me`, getHeaders())
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
    getDogDossierDocs: function(dogId){
        return axios.get(`/api/dog/${dogId}/documents`, getHeaders())
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
    getMyProfilePhoto: function (){
        return axios.get(`/api/user/me/photo`, {...getHeaders(), responseType: "blob"})
    }
}

export default API;