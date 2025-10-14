import { jwtDecode } from "jwt-decode";

export const authDecodeToken = (token: string) => {
    const decode: { email: string, roles: { name: string }[] } = jwtDecode(token)
    const userEmail = decode.email;
    const userRoles = decode.roles.map(elem => elem.name);

    return {token, userEmail,userRoles}
}


