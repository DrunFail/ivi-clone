import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';
import { NextRequest } from "next/server";
import { authMiddleware } from '@/middlewares/authMiddleware';

const handleIntlRouting = createMiddleware({
    defaultLocale: 'ru',
    localePrefix,
    locales
});

export const config = {
    matcher: ['/', '/(ru|en)/:path*']
};

export default async function middleware(request: NextRequest) {
    const newCookies = await authMiddleware(request);
    const response = handleIntlRouting(request);
    if (newCookies) {
        for (const cookie of newCookies.cookies) {
            response.headers.append('Set-Cookie', cookie);
        }
        response.headers.append('X-Access-Token', newCookies.newAccessToken)

    }
    return response
}