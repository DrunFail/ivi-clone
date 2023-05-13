import { AxiosResponse } from "axios";
import { axiosAuth } from "../../../lib/axios";
import { AuthContextData } from "../context/interfaces";
import AuthService from "../services/auth.service";
import useAuth from "./useAuth";

const useRefreshToken = () => {
    const authValue = useAuth();
    if (!authValue) throw new Error("auth error");
    const setAuth = authValue.setAuth;

    const refresh = async () => {
        const response:AxiosResponse<AuthContextData> = await AuthService.refresh();
        setAuth((prev:AuthContextData) => {
            return { ...prev, token: response.data.token };
        });
        return response.data.token;
    };
    return refresh;
};

export default useRefreshToken;
