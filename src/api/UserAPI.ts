import { AxiosInstance } from 'axios';
import { axiosAuth } from '../lib/axios';

export const UserAPI = {
    getUserProfileData: async (axios: AxiosInstance) => {
        const response = axios.request({
            url: '/api/profiles/me',
            method: 'get',
        });
        return response;
    },
    getUserProfileDataById: async (profileId: number) => {
        const response = axiosAuth.request({
            url: `/api/profiles/${profileId}`,
            method: 'get',
        });
        return response;
    },
    updateUserProfileDataById: async (profileId: number) => {
        const response = axiosAuth.request({
            url: `/api/profiles/${profileId}`,
            method: 'put',
        });
        return response;
    },
    deleteUserProfileAvatarById: async (profileId: number) => {
        const response = axiosAuth.request({
            url: `/api/profiles/unset_avatar/${profileId}`,
            method: 'get',
        });
        return response;
    },
    getUserProfileAvatarById: async (profileId: number) => {
        const response = axiosAuth.request({
            url: `/api/profiles/avatar/${profileId}`,
            method: 'get',
        });
        return response;
    },
    setUserProfileAvatarById: async (profileId: number) => {
        const response = axiosAuth.request({
            url: `/api/profiles/upload_avatar/${profileId}`,
            method: 'post',
        });
        return response;
    },
};
