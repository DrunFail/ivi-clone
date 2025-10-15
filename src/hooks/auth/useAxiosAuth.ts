import { useEffect } from 'react';
import useAuth from './useAuth';
import useRefreshToken from './useRefreshToken';
import { axiosAuth } from '../../lib/axios';

const useAxiosAuth = () => {
    const refresh = useRefreshToken();
    const authValue = useAuth();
    if (!authValue) throw new Error('auth error');
    const auth = authValue.auth;

    useEffect(() => {
        const requestIntercept = axiosAuth.interceptors.request.use(
            (config) => {
                if (!config?.headers?.Authorization) {
                    config.headers.Authorization = `Bearer ${auth?.token}`;
                }
                return config;
            },
            (error) => Promise.reject(error),
        );

        const responseIntercept = axiosAuth.interceptors.response.use(
            (response) => response,
            async (error) => {
                const prevRequest = error.config;
                if (error?.response?.status === 401 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    return axiosAuth(prevRequest);
                }
                return Promise.reject(error);
            },
        );

        return () => {
            axiosAuth.interceptors.request.eject(requestIntercept);
            axiosAuth.interceptors.response.eject(responseIntercept);
        };
    }, [auth, refresh]);

    return axiosAuth;
};

export default useAxiosAuth;
