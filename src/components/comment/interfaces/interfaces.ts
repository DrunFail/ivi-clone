import { ReviewTree } from '../../../models/types';

export type PickedReview = Pick<
    ReviewTree,
    'filmId' | 'parentId' | 'text' | 'title' | 'createdAt' | 'id' | 'profile'
> & { childs: PickedReview[] };
