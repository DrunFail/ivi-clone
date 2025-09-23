import { authMiddleware } from "./middlewares/authMiddleware";
import { stackMiddlewares } from "./middlewares/stackMiddlewares";

import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';

export default createMiddleware({
    defaultLocale: 'ru',
    localePrefix,
    locales
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(ru|en)/:path*']
};



stackMiddlewares([authMiddleware]);