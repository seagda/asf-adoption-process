const axios = require("axios")

<<<<<<< HEAD
function getHeaders(){
    return {headers: {"x-access-token": JSON.parse(localStorage.getItem("user")).accessToken}}
=======
function getHeaders() {
    return {headers: {"x-access-token": localStorage.getItem("user").accessToken}};
    
>>>>>>> hs-dashboards-part5
}

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

    // example get request
    getDogDossiersAll: function() {
        return axios.get("/api/dog", getHeaders())
    },
    getExtContact: function(){
        return axios.get(`/api/contact`, getHeaders())
<<<<<<< HEAD
=======
    },
    getRegions: function(){
        return axios.get(`/api/region`, getHeaders())
    },
    getDogStatus: function(){
        return axios.get(`/api/dog/status`, getHeaders())
>>>>>>> hs-dashboards-part5
    }
}

export default API;