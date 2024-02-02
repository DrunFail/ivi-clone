import styles from "./LogoutButton.module.scss";
import { useRouter } from "next/router";
import useAuth from "../../auth/hooks/useAuth";
import { AuthAPI } from "../../../api/AuthAPI";

export default function LogoutButton() {
    const router = useRouter();
    const setAuth = useAuth()?.setAuth;

    const handleLogout = async () => {
        const response = await AuthAPI.logout();
        setAuth({ token: "", userEmail: "", userRoles: [] });
        document.cookie = "callbackUrl=/";
        router.push('/auth/login');

    }

    return (
        <button onClick={handleLogout} className={styles.button }>Выйти</button>
    );
}