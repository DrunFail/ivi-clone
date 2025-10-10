import { HttpError } from "@/lib/error";

class AuthAPI {

    async getUserProfile(token: string) {
        const profileResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/profiles/me`, {
            method: "get",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            cache: "no-store"
        });
        if (!profileResponse.ok) {
            return null;
        }
        return await profileResponse.json();
    }


    async registration(userRegistrationData: { email: string, password: string }) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/registration`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userRegistrationData)
        });
        if (!response.ok) {
            throw new Error('error during registration')
        }
        return await response.json()
    }


    async login(userLoginData: { email: string, password: string }) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userLoginData)
        });
        if (!response.ok) {
            if (response.status === 401 || response.status === 404) {
                throw new HttpError(response.status)
            }
           
            throw new Error('error during login')
        }
        return await response.json()
    }


    async logout() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/logout`, {
            method: "post",
        });
        if (!response.ok) {
            throw new Error('error during logout')
        }
        return await response.json()
    }


    async refresh() {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/refresh`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
        });
        if (!response.ok) {
            throw new Error('error during refresh')
        }
        return await response.json()
    }


    async vk(code: string) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/vk`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({code:code})
        });
        if (!response.ok) {
            throw new Error('error during vk auth')
        }
        return await response.json()
    }


    async google(token: string) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/google`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({token:token})
        });
        if (!response.ok) {
            throw new Error('error during google auth')
        }
        return await response.json()
    }
}

export const authAPI = new AuthAPI();