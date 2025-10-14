import Crumb from "./Crumb/Crumb";
import styles from "./BreadCrumbs.module.scss";
import DefaultSeparator from "./DefaultSeparator/DefaultSeparator";
import { Fragment } from "react";
import { Link } from "@/i18n/navigation";

interface BreadCrumbsProps {
    breadcrumbs: { children: React.ReactNode, href: string }[],
    isLastCrumbActive?: boolean,
    separator?: React.ReactNode
}

export default function BreadCrumbs({ breadcrumbs, isLastCrumbActive = true, separator = <DefaultSeparator /> }: BreadCrumbsProps) {
    return (
        <div className={styles.container}>
            {breadcrumbs.map((crumb, index) => {
                const isLastCrumb = (index + 1) === breadcrumbs.length;
                const isActiveCrumb = isLastCrumb ? isLastCrumbActive : true;
                const renderedCrumb = <Crumb active={isActiveCrumb}>{crumb.children}</Crumb>


                return (
                    <Fragment key={index}>
                        {isLastCrumb && !isLastCrumbActive
                            ? <div >{renderedCrumb}</div>
                            : <Link href={crumb.href}>
                                {renderedCrumb}
                            </Link>
                        }

                        {!isLastCrumb && separator}
                    </Fragment>)
            }
            )}
        </div>

    );
}