/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "thumbs.dfs.ivi.ru",
            "zetflis.online",
            "static.okko.tv",
            "kinopoiskapiunofficial.tech",
            "avatars.mds.yandex.net",
            "youtu.be"
        ]
    },
}

/*module.exports = nextConfig*/

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: true,
})



module.exports = withBundleAnalyzer(nextConfig)