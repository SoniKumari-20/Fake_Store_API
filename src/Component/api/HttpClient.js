import { getValue } from "@testing-library/user-event/dist/utils/edit/getValue";
import axios from "axios"
import { getToken } from "../utils";


const setDefaultAxios = () => {
    axios.defaults.baseURL = 'https://fakestoreapi.com'
    axios.defaults.headers.common['Authorization'] = getToken("Token", getValue )
    axios.defaults.headers.post['Content-Type'] = 'application/json';
}

const custom = (config = {}, timeout) => {
    return axios(config);
};


export const HttpClient = {
    setDefaultAxios,
    custom
}