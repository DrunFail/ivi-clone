import { usePathname } from 'next/navigation';
import { useActionState, useOptimistic } from 'react';
import useAuth from '../../hooks/auth/useAuth';
import { z } from 'zod';
import { PickedReview } from '../../components/comment/interfaces/interfaces';
import { createReview } from '../../components/comment/addCommentAction';

type FormState =
    | {
          errors?: {
              commentText?: string[];
          };
          message?: string;
      }
    | undefined;

const AddCommentSchema = z.object({
    commentText: z.string().min(5, 'min5').trim(),
    filmId: z.number(),
    parentId: z.number(),
});

export default function useOptimisticAddCommentWithFormState<T extends PickedReview | PickedReview[]>(initState: T) {
    const path = usePathname();
    const { auth } = useAuth();

    const [optimisticReviews, addOptimisticReview] = useOptimistic<T, PickedReview>(initState, (state, newReview) => {
        if (Array.isArray(state)) {
            return [newReview, ...state] as T;
        }
        return {
            ...state,
            childs: [...state.childs!, newReview],
        } as T;
    });
    const commentAction = async (state: FormState, formData: FormData) => {
        if (!auth) {
            console.error('auth is null');
            return;
        }
        const validatedFields = AddCommentSchema.safeParse({
            commentText: formData.get('commentText'),
            filmId: Number(formData.get('filmId')),
            parentId: Number(formData.get('parentId')),
        });

        if (!validatedFields.success) {
            return {
                errors: validatedFields.error.flatten().fieldErrors,
            };
        }

        const { commentText, filmId, parentId } = validatedFields.data;

        const date = Date.now();

        addOptimisticReview({
            filmId,
            parentId,
            text: commentText,
            title: '',
            createdAt: new Date(date).toISOString(),
            id: date,
            profile: auth.profile,
            childs: [],
        });
        await createReview(
            {
                filmId,
                parentId: parentId !== 0 ? parentId : undefined,
                text: commentText,
                title: '',
            },
            path,
        );
    };

    const [state, action] = useActionState(commentAction, undefined);

    return { optimisticReviews, state, action };
}
