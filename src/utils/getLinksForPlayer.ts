import { Trailer } from "../models/types";
import { getTrailerLink } from "./getTrailerLink";


export  function getLinksForPlayer(trailer: Trailer[]) {
    
    const firstTrailer = trailer[0];

    const firstTrailerLink = getTrailerLink(firstTrailer)

    const trailerLinkList = trailer.map(item => getTrailerLink(item));

    return { firstTrailerLink, trailerLinkList }
}