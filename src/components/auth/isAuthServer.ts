import { cookies } from 'next/headers';

export const isAuthServer = async () => {
    return Boolean((await cookies()).get('refreshToken'));
};
