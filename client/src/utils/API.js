const axios = require("axios")

function getHeaders(){
    return {headers: {"x-access-token": JSON.parse(localStorage.getItem("user")).accessToken}}
}

function handle401(err){
    console.error(err)
    if(err.status === 401){
        window.location.href = "/"
    } 
}

const API = {
    login: function(userData){
        return axios.post(`/auth/signin`, userData).catch(handle401)
    },
    signup: function(userData){
        return axios.post(`/auth/signup`, userData).catch(handle401)
    },
    createDog: function(dogData){
        return axios.post(`/api/dog`, dogData, getHeaders()).catch(handle401)
    }, 
    createUser: function(userData){
        return axios.post(`/api/user/new`, userData, getHeaders()).catch(handle401)
    },
    getAdopterApp: function(){
        return axios.get(`/api/app/adopter/questions`, getHeaders()).catch(handle401)
    },
    getFosterApp: function(){
        return axios.get(`/api/app/foster/questions`, getHeaders()).catch(handle401)
    },
    sendAppData: function(response, appId){
        return axios.post(`/api/user/app-response`, response, appId, getHeaders()).catch(handle401)
    },
    getMyUserData: function(){
        return axios.get(`/api/user/me`, getHeaders()).catch(handle401)
    },
    updateMyUserData: function(userData){
        return axios.put(`/api/user/me`, userData, getHeaders()).catch(handle401)
    },
    getSingleDogData: function(dogId){
        return axios.get(`/api/dog/${dogId}`, getHeaders()).catch(handle401)
    },
    updateDogInfo: function(dogData, dogId){
        return axios.put(`/api/dog/${dogId}`, dogData, getHeaders()).catch(handle401)
    },
    microchipMfgGetAll: function(){
        return axios.get("/api/dog/microchip-mfg", getHeaders()).catch(handle401)
    },

    getDogDossiersAll: function() {
        return axios.get("/api/dog", getHeaders()).catch(handle401)
    },
    getExtContact: function(){
        return axios.get(`/api/contact`, getHeaders()).catch(handle401)
    },
    getRegions: function(){
        return axios.get(`/api/region`, getHeaders()).catch(handle401)
    },
    getDogStatus: function(){
        return axios.get(`/api/dog/status`, getHeaders()).catch(handle401)
    },
    getRoles: function(){
        return axios.get(`/api/role`, getHeaders()).catch(handle401)
    },
    getUsersAll: function(){
        return axios.get(`/api/user`, getHeaders()).catch(handle401)
    },
    getDashboardData: function(){
        return axios.get(`/api/dashboard`, getHeaders()).catch(handle401)
    }
}

export default API;