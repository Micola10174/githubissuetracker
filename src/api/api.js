import axios from "axios";

export const api = {
    default:{
        client: axios.create({
            baseURL: 'https://api.github.com',
            responseType: 'json'
        })
    }
};

export default api;
