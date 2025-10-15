const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: false,
});
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                //movie and person images
                protocol: 'https',
                hostname: 'kinopoiskapiunofficial.tech',
            },
            {
                protocol: 'https',
                hostname: 'avatars.mds.yandex.net',
            },
            {
                protocol: 'https',
                hostname: 'static.okko.tv',
            },
            {
                protocol: 'https',
                hostname: 'zetflis.online',
            },
            {
                protocol: 'https',
                hostname: 'thumbs.dfs.ivi.ru',
            },
            {
                protocol: 'https',
                hostname: 'image.openmoviedb.com',
            },
        ],
    },
};

module.exports = withNextIntl(withBundleAnalyzer(nextConfig));
