import { axiosAuth } from "../lib/axios"

export const AuthAPI = {
    registration: async (userRegistrationData: {email:string, password: string}) => {
        const response = await axiosAuth.request({
            url: `/api/auth/registration`,
            method: "post",
            data: userRegistrationData
        })
        return response
    },
    login: async (userLoginData: {email:string, password:string}) => {
        const response = await axiosAuth.request({
            url: `/api/auth/login`,
            method: "post",
            data: userLoginData
        })
        return response
    },
    logout: async () => {
        const response = await axiosAuth.request({
            url: `/api/auth/logout`,
            method: "post"
        })
        return response
    },
    refresh: async () => {
        const response = await axiosAuth.request({
            url: `/api/auth/refresh`,
            method: "post"
        })
        return response
    },
    vk: async (code: string) => {
        const response = await axiosAuth.request({
            url: `/api/auth/vk`,
            method: "post",
            data: {code: code}
        })
        return response
    },
    google: async (token: string) => {
        const response = await axiosAuth.request({
            url: `/api/auth/google`,
            method: "post",
            data: {token: token}
        })
        return response
    }
}