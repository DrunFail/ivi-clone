import { cookies } from "next/headers";
import AdminMainPageMessage from "../../../../components/AdminDashboard/AdminMainPageMessage/AdminMainPageMessage";
import jwtDecode from "jwt-decode";
import { redirect } from "../../../../navigation";

export default async function AdminHomePage() {
    const isToken = cookies().get("refreshToken")?.value;
    if (!isToken) {
        redirect("/");
        return;
    }
    const transform = jwtDecode(isToken) as { roles: {name: string}[] };
    const isAdmin = transform.roles.find(role => role.name.toLocaleLowerCase() === "admin");
    if (!isAdmin) {
        redirect("/")
    }
    return (
        <AdminMainPageMessage />
    );
}