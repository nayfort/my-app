import axios from "axios";

const instance = axios.create ({
    withCredentials: true,
    headers: {"API-KEY": "f0dd1f20-4a6e-4722-a644-663df48493bc"},
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page${currentPage}&count=${pageSize}`)
            .then(response => {return response.data;
            });
},
    follow(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }

    // async me() {
    //     const data = await axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
    //         withCredentials: true
    //     })
    //     console.log('data', data)
    // }
}