import axios from "axios";

const instance = axios.create ({
    withCredentials: true,
    headers: {"API-KEY": "2785eff8-0730-4799-8b37-6a045ac8fd61"},
    baseURL: `https://social-network.samuraijs.com/api/1.0/`
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

// в delete параметр withCredentials отправляется вторым
    unFollow(id) {
        return instance.delete(`follow/${id}`)
    },

// в post параметр withCredentials отправляется третьим
    follow(id) {
        return instance.post(`follow/${id}`)
    },

    getProfile(userId) {
        console.warn('Obsolete method.Please use profileApi')
        return profileAPI.getProfile(userId);
    }

}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put('profile/status', {status: status})
    }
}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe=false) {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logout () {
        return instance.delete('auth/login')
    }
}