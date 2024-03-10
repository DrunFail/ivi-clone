import { Trailer } from "../../../models/types";

const DEFAULT_TRAILER_LINK = "https://www.youtube.com/embed/pCbPwpcgUbM"

const getTrailerLink = (trailer: Trailer) => {
    const trailerLink = trailer && trailer.site === "YOUTUBE" ? trailer.url : DEFAULT_TRAILER_LINK;
    return trailerLink;
}

export default function useCustomReactPlayer(trailer:Trailer[]) {
    const firstTrailer = trailer[0];
    
    const firstTrailerLink = getTrailerLink(firstTrailer)

    const trailerLinkList = trailer.map(item => getTrailerLink(item));

    return {firstTrailerLink, trailerLinkList}
}