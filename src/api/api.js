import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "a2fea8f3-7fef-4d2d-b82b-a5a912f509a4",
  },
});

export const usersAPI = {
  getUsers(pageUsers, currentPage) {
    return instance
      .get(`users?count=${pageUsers}&page=${currentPage}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then((response) => {
      return response.data;
    });
  },
};

export const authAPI = {
  setAuthUser() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  loginInService(data) {
    return instance.post(`/auth/login`, data).then((response) => {
      return response.data;
    });
  },
};

export const profileAPI = {
  getProfileStatus(userId) {
    return instance.get(`profile/status/${userId}`).then((response) => {
      return response.data;
    });
  },
  setProfileStatus(text) {
    return instance.put(`profile/status`, { status: text }).then((response) => {
      return response.data;
    });
  },
};
