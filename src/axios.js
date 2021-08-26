import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/full-clone-699fe/us-central1/api' //The Api URL(cloud function)
})

export default instance;