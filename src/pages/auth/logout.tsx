import Link from "next/link";
import { axiosAuth } from "../../lib/axios";

export default function Logout() {
    return (
        <div>
            <p>Вы действительно хотите выйти?</p>
            <button>yes</button>
            <Link href="/auth/login">no</Link>
        </div>
    );
}
