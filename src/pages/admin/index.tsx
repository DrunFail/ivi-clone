import { ReactElement } from "react";
import AdminLayout from "../../components/AdminDashboard/AdminLayout/AdminLayout";
import AdminMainPageMessage from "../../components/AdminDashboard/AdminMainPageMessage/AdminMainPageMessage";

export default function Admin({ children }: {children: React.ReactNode}) {
    return (
        <AdminMainPageMessage />
    );
};

Admin.getLayout = function getLayout(page: ReactElement) {
    return (
        <AdminLayout>{page}</AdminLayout>
    )
}
