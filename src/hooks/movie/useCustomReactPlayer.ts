import { Trailer } from '../../models/types';
import { getTrailerLink } from '../../utils/getTrailerLink';

export default function useCustomReactPlayer(trailer: Trailer[] | undefined) {
    if (!trailer) return null;
    const firstTrailer = trailer[0];

    const firstTrailerLink = getTrailerLink(firstTrailer);

    const trailerLinkList = trailer.map((item) => getTrailerLink(item));

    return { firstTrailerLink, trailerLinkList };
}
