import * as axios from "axios/index";

// it is dal level
const instance = axios.create({
    withCredentials: true,
    baseURL: 'urn:ietf:wg:oauth:2.0:oob',
    headers: {
        'API-KEY': '95084d15b90a7d8a391ad7362771434580a901a0b1bc95e567a572c3931ee5c3'
    },
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}
        &count=${pageSize}`)
            .then(response => response.data);
    },
    follow(userId) {

        return instance.post(`follow/${userId}`,
        )
            .then(response => {
                return response.data
            });
    },
    unFollow(userId) {

        return instance.delete(`follow/${userId}`,)
            .then(response => {
                return response.data
            });
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please use profileAPI0');
        return profileAPI.getProfile(userId);

    }
}
export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }

}
export const AuthAPI = {
    checkAuth() {
        return instance.get(`auth/me`,)
            .then(response => {
                return response.data
            });
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});

    },
    logout(email, password, rememberMe = false) {
        return instance.delete(`auth/login`);
    },
}




