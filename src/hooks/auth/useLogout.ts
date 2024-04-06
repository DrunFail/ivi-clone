import { useRouter } from "next/router";
import useAuth from "./useAuth";
import { AuthAPI } from "../../api/AuthAPI";
import { DEFAULT_AUTH_CONTEXT_VALUE } from "../../components/auth/context/AuthProvider";

export default function useLogout() {
    const router = useRouter();
    const setAuth = useAuth()?.setAuth;

    const handleLogout = async () => {
        try {
            const response = await AuthAPI.logout();
            setAuth(DEFAULT_AUTH_CONTEXT_VALUE);
            document.cookie = "callbackUrl=/";
            router.push('/auth/login');
        } catch (error) {
            console.log(error)
        }
    }


    return handleLogout;
}