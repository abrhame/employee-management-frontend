import axios from "axios";

const baseURL = "https://employee-management-sdpg.onrender.com/";

const api = axios.create({
    baseURL:baseURL,
});

export const postData = (endpoint,data) => api.post(endpoint,data)
export const putData = (endpoint,data) => api.put(endpoint,data)
export const getData = (endpoint) => api.get(endpoint)
export const deleteData = (endpoint) => api.delete(endpoint)