import axios from "axios";

const API = axios.create({
    baseURL: 'https://portfolio-arafat.000webhostapp.com/api'
})

export default API;