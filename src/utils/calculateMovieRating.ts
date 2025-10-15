export const calculateMovieRating = (movieRating: string | null) => {
    if (movieRating) {
        const rating = movieRating.split('.');
        if (rating.length === 1) {
            return [...rating, '0'];
        }

        return rating;
    }
    return ['0', '0'];
};
