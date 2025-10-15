import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { authMiddleware } from '@/middlewares/authMiddleware';
import { routing } from '@/i18n/routing';

const handleIntlRouting = createMiddleware(routing);

export const config = {
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};

export default async function middleware(request: NextRequest) {
    const newCookies = await authMiddleware(request);
    const response = handleIntlRouting(request);
    if (newCookies) {
        response.headers.append('Set-Cookie', newCookies.cookies);
        response.headers.append('X-Access-Token', newCookies.newAccessToken);
    }
    return response;
}
