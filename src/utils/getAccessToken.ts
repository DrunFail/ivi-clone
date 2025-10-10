import { cookies, headers } from "next/headers";

export function getAccessToken() {
    const tokenFromHeader = headers().get("X-Access-Token");
    const tokenFromCookie = cookies().get("session")?.value;
    const token = tokenFromHeader || tokenFromCookie;
    if (!token) {
        return null;
    }
    return token;
}