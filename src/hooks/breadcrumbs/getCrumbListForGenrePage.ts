import { getTranslations } from 'next-intl/server';

export async function getCrumbListForGenrePage({ genre, typeMovie }: { genre: string; typeMovie: string }) {
    const t = await getTranslations();
    const homeLink = {
        children: t('MyIvi'),
        href: '/',
    };
    const typeMovieLink = {
        children: t(`breadcrumbs.${typeMovie}`),
        href: `/${typeMovie}/all`,
    };
    const genreLink = {
        children: t(`genre.${genre}.short`),
        href: `/movies/${genre}`,
    };
    return genre === 'all' ? [homeLink, typeMovieLink] : [homeLink, typeMovieLink, genreLink];
}
