import { Trailer } from "../models/types";

const DEFAULT_TRAILER_LINK = "https://www.youtube.com/embed/pCbPwpcgUbM"

export const getTrailerLink = (trailer: Trailer) => {
    const trailerLink = trailer && trailer.site === "YOUTUBE" ? trailer.url : DEFAULT_TRAILER_LINK;
    return trailerLink;
}