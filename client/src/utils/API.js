const axios = require("axios")


const API = {
    login: function(userData){
        return axios.post(`/auth/signin`, userData)
    },
    signup: function(userData){
        return axios.post(`/auth/signup`, userData)
    },
    createDog: function(dogData){
        return axios.post(`/api/dog`, dogData, {headers: {"x-access-token": localStorage.getItem("x-access-token")}})
    }
}

export default API;