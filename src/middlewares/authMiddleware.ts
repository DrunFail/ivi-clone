import { NextResponse, NextRequest, NextFetchEvent } from "next/server";
import { MiddlewareFactory } from "./types";
import jwtDecode from "jwt-decode";
import { match } from '@formatjs/intl-localematcher'
import Negotiator from "negotiator";


export const authMiddleware: MiddlewareFactory = (next) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
        const refreshToken = request.cookies.get("refreshToken")?.value;
        const url = request.nextUrl.clone();
        const res = NextResponse.next();

        
        let locales = [ 'ru', 'en']
        let defaultLocale = 'ru'
        const langHeaders = request.headers.get("Accept-Language")!;
        let languages = new Negotiator({ headers: { "Accept-Language": langHeaders } }).language(locales)!;
        const langCookie = request.cookies.get("locale")?.value;
        /* eslint-disable */
        //@ts-ignore
        const locale = match(languages, locales, defaultLocale)
        const currentLocale = langCookie || locale;
        const { pathname } = request.nextUrl
        const pathnameHasLocale = locales.some(
            (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
        )
        const PUBLIC_FILE = /\.(.*)$/;
        if (!pathnameHasLocale && !request.nextUrl.pathname.startsWith('/_next') && !PUBLIC_FILE.test(request.nextUrl.pathname) ) {
            request.nextUrl.pathname = `/${currentLocale}${pathname}`;
            
            return NextResponse.redirect(request.nextUrl)
        }



        ////guard для админ страницы
        //if (request.nextUrl.pathname === "/admin") {
        //    url.pathname = "/404"
        //    if (refreshToken === undefined) {
        //        return NextResponse.redirect(url)
        //    }

        //    try {
        //        const decode: { roles: { name: string }[] } = jwtDecode(refreshToken)
        //        const roles = decode.roles.map(elem => elem.name);
        //        if (roles.includes("USER")) {
        //            return NextResponse.next()
        //        } else {
        //            return NextResponse.redirect(url)
        //        }
        //    } catch (e) {
        //        return NextResponse.redirect(url)
        //    }
        //}

        //url для редиректа на страницу, с которой был переход на страницу логина
        if (refreshToken === undefined) {
            const PUBLIC_FILE = /\.(.*)$/;

            if (
                request.nextUrl.pathname.startsWith('/_next') ||
                request.nextUrl.pathname.includes('/api/') ||
                PUBLIC_FILE.test(request.nextUrl.pathname)) {

                return
            }
            const res = NextResponse.next();

            const pathname = request.nextUrl.pathname;
            url.pathname = pathname;


            if (pathname !== '/auth/login' && pathname !== '/404' && pathname !== '/auth/registration') {
                res.cookies.set("callbackUrl", pathname);
                
            }

            return res;
        }

       
       
        

        return res;
        
    }
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}