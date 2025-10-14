import { cookies, headers } from "next/headers";

export async function getAccessToken() {
    const tokenFromHeader = (await headers()).get("X-Access-Token");
    const tokenFromCookie = (await cookies()).get("session")?.value;
    const token = tokenFromHeader || tokenFromCookie;
    if (!token) {
        return null;
    }
    return token;
}