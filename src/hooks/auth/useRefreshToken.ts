import { AuthAPI } from '../../api/AuthAPI';
import { authDecodeToken } from '../../utils/authDecodeToken';
import useAuth from './useAuth';

export default function useRefreshToken() {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await AuthAPI.refresh();

        const { userEmail, userRoles, token } = authDecodeToken(response.data.token);
        /* eslint-disable */
        //@ts-ignore
        setAuth((prev: AuthContextData) => {
            return {
                ...prev,
                token,
                userEmail,
                userRoles,
            };
        });
        return response.data.token;
    };
    return refresh;
}
