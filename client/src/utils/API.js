const axios = require("axios")

function getHeaders() {
    return {headers: {"x-access-token": localStorage.getItem("user").accessToken}};
    
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

    // example get request
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
    }
}

export default API;