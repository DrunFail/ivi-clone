import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: BASE_URL + '/ru',
            lastModified: new Date(),
            alternates: {
                languages: {
                    es: BASE_URL + '/ru',
                    de: BASE_URL + '/en',
                },
            },
        },
        {
            url: BASE_URL + '/ru/auth/login',
            lastModified: new Date(),
            alternates: {
                languages: {
                    es: BASE_URL + '/ru/auth/login',
                    de: BASE_URL + '/en/auth/login',
                },
            },
        },
        {
            url: BASE_URL + '/ru/auth/registration',
            lastModified: new Date(),
            alternates: {
                languages: {
                    es: BASE_URL + '/ru/auth/registration',
                    de: BASE_URL + '/en/auth/registration',
                },
            },
        },
    ];
}
