import { useRouter } from "next/router";
import useAuth from "./useAuth";
import { AuthAPI } from "../../../api/AuthAPI";

export default function useLogout() {
    const router = useRouter();
    const setAuth = useAuth()?.setAuth;

    const handleLogout = async () => {
        try {
            const response = await AuthAPI.logout();
            setAuth({ token: "", userEmail: "", userRoles: [] });
            document.cookie = "callbackUrl=/";
            router.push('/auth/login');
        } catch (error) {
            console.log(error)
        }
    }


    return handleLogout;
}