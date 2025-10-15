import { NextRequest } from 'next/server';

export async function authMiddleware(request: NextRequest) {
    const accessToken = request.cookies.get('session')?.value;
    const refreshToken = request.cookies.get('refreshToken')?.value;
    if (!accessToken && refreshToken) {
        const refreshResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/refresh`, {
            method: 'post',
            headers: {
                Cookie: `refreshToken=${refreshToken}`,
            },
        });
        if (refreshResponse.ok) {
            const newAccessToken = await refreshResponse.json();
            refreshResponse.headers.append(
                'Set-Cookie',
                `session=${newAccessToken.token};Path=/;SameSite=Lax;HttpOnly=${process.env.NODE_ENV === 'production'};Secure;Max-Age=${15 * 60}`,
            );
            return {
                cookies: refreshResponse.headers.get('Set-Cookie') as string,
                newAccessToken: newAccessToken.token,
            };
        }
    }
    return null;
}
