import { generateSitemaps as personSitemaps } from '../[locale]/(withRootLayout)/person/sitemap';
import { generateSitemaps as movieSitemaps } from '../[locale]/(withRootLayout)/movie/sitemap';

const BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;

const generateSitemapLink = (url: string) => `<sitemap><loc>${url}</loc></sitemap>`;

function getFileName(id: string | number) {
    return process.env.NODE_ENV === 'development' ? `sitemap.xml/${id}` : `sitemap/${id}.xml`;
}

const getSitemapsForMultiply = (ids: { id: number | string }[], path: string) => {
    return ids.flatMap(({ id }) => [
        `<sitemap><loc>${BASE_URL}/ru/${path}/${getFileName(id)}</loc></sitemap>`,
        `<sitemap><loc>${BASE_URL}/en/${path}/${getFileName(id)}</loc></sitemap>`,
    ]);
};

export async function GET() {
    const sitemapIndexXML = `<?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${generateSitemapLink(BASE_URL + '/sitemap.xml')}
        ${generateSitemapLink(BASE_URL + '/ru/movies/sitemap.xml')}
        ${generateSitemapLink(BASE_URL + '/en/movies/sitemap.xml')}
        ${getSitemapsForMultiply(await personSitemaps(), 'person')}
        ${getSitemapsForMultiply(await movieSitemaps(), 'movie')}
    </sitemapindex>`;

    return new Response(sitemapIndexXML, {
        headers: { 'Content-Type': 'application/xml' },
    });
}
