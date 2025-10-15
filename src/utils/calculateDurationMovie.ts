import { declensionString } from './declensionString';

export const calculateDurationMovie = (movieDuration: string | null) => {
    if (movieDuration) {
        return declensionString(+movieDuration, ['минута', 'минуты', 'минут']);
    }
    return 'unknown';
};
