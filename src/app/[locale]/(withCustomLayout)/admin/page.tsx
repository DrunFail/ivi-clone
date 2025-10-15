import { cookies } from 'next/headers';
import AdminMainPageMessage from '../../../../components/AdminDashboard/AdminMainPageMessage/AdminMainPageMessage';
import { jwtDecode } from 'jwt-decode';
import { redirect } from '@/i18n/navigation';
import { getLocale } from 'next-intl/server';

export default async function AdminHomePage() {
    const isToken = (await cookies()).get('refreshToken')?.value;
    const currentLocale = await getLocale();
    if (!isToken) {
        redirect({ href: '/', locale: currentLocale });
        return;
    }
    const transform = jwtDecode(isToken) as { roles: { name: string }[] };
    const isAdmin = transform.roles.find((role) => role.name.toLocaleLowerCase() === 'admin');
    if (!isAdmin) {
        redirect({ href: '/', locale: currentLocale });
    }
    return <AdminMainPageMessage />;
}
