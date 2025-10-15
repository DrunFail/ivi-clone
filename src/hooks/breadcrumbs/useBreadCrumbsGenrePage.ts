import { useParams, usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

export default function useBreadCrumbsGenrePage() {
    const t = useTranslations();
    const genre = useParams<{ genre: string }>()!.genre;
    const path = usePathname()!;
    const locale = useLocale();

    const splitedLinkList = path.split('/').filter((item) => item !== 'all' && item !== locale);

    let returnedLink = '/';
    const arrayLink = splitedLinkList.map((elem, index) => {
        if (index === 0) {
            const returnedLinkTitle = t('MyIvi');
            return { children: returnedLinkTitle, href: '/' };
        }

        if (elem === genre) {
            const genreName = t(`genre.${elem}.short`);
            returnedLink = returnedLink + elem + '/';
            return { children: genreName, href: returnedLink };
        }

        returnedLink = returnedLink + elem + '/';
        const returnedLinkTitle = t(`breadcrumbs.${elem}`);
        return { children: returnedLinkTitle, href: returnedLink + 'all' };
    });
    return arrayLink;
}
