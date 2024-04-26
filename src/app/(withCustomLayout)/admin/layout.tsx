import AdminLayout from "../../../components/AdminDashboard/AdminLayout/AdminLayout";

export default function Layout({ children }: {children:React.ReactNode}) {
    return (
        <AdminLayout>
            {children}
        </AdminLayout>
    );
}