import { AuthContextData } from "../context/interfaces";
import useAuth from "./useAuth";
import { AuthAPI } from "../../../api/AuthAPI";

const useRefreshToken = () => {
    const authValue = useAuth();
    if (!authValue) throw new Error("auth error");
    const setAuth = authValue.setAuth;

    const refresh = async () => {
        const response = await AuthAPI.refresh();
        setAuth((prev:AuthContextData) => {
            return { ...prev, token: response.data.token };
        });
        return response.data.token;
    };
    return refresh;
};

export default useRefreshToken;
