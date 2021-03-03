const axios = require("axios")

function getHeaders(){
    return {headers: {"x-access-token": JSON.parse(localStorage.getItem("user")).accessToken}}
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
    }
}

export default API;