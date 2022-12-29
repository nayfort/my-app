import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '2cad83e0-9283-429c-85be-07eaa3487816'
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page${currentPage}&count=${pageSize}`).then(response => {return response.data;});
}}

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(`follow?page${currentPage}&count=${pageSize}`).then(response => {return response.data;});
}