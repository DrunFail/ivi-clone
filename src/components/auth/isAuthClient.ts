import { cookieParser } from '../../utils/cookieParser';

export const isAuthClient = Boolean(cookieParser('refreshToken'));
