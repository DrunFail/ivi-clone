import React from "react";
import styles from "./LogoutButton.module.scss";
import { useRouter } from "next/router";
import AuthService from "../../services/auth.service";
import useAuth from "../../hooks/useAuth";

export default function LogoutButton() {
    const router = useRouter();
    const setAuth = useAuth()?.setAuth;

    const handleLogout = async () => {
        const response = await AuthService.logout();
        setAuth({ token: "", userEmail: "", userRoles: [] });
        document.cookie = "callbackUrl=/";
        router.push('/auth/login');

    }

    return (
        <button onClick={handleLogout} className={styles.button }>Выйти</button>
    );
}