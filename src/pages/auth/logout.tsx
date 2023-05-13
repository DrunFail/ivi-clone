import Link from "next/link";
import React from "react";
import AuthService from "../../components/auth/services/auth.service";
import { axiosAuth } from "../../lib/axios";

export default function Logout() {
    const handleLogout = async () => {
        const response = await axiosAuth.post(AuthService.logout);
    };
    return (
        <div>
            <p>Вы действительно хотите выйти?</p>
            <button onClick={handleLogout}>yes</button>
            <Link href="/auth/login">no</Link>
        </div>
    );
}
