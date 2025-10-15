'use client';

import useBreadCrumbsGenrePage from '../../hooks/breadcrumbs/useBreadCrumbsGenrePage';
import BreadCrumbs from '../UI/BreadCrumbs/BreadCrumbs';

export default function BreadcrumbsGenrePage() {
    const breadcrumbsData = useBreadCrumbsGenrePage();

    return <BreadCrumbs breadcrumbs={breadcrumbsData} isLastCrumbActive={false} />;
}
