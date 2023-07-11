import { ReactElement } from "react";
import AdminLayout from "../../../components/AdminDashboard/AdminLayout/AdminLayout";
import Genres from "../../../components/AdminDashboard/pages/Genres/Genres";

export default function AdminGenres() {
    return (
        <Genres />
    );
}

AdminGenres.getLayout = function getLayout(page: ReactElement) {
    return (
        <AdminLayout>{page}</AdminLayout>
    )
}