import styles from "./DropdownList.module.scss";
import { LinkData } from "../../../models/global";
import { useTranslations } from "next-intl";
import { Link } from "../../../navigation";

interface DropdownListProps {
    linkDataList: LinkData[],
    oneColumn?: boolean,
    intlPrefix?: string,
    onClick?: () => void,
    testId?:string
    
}


export default function DropdownList({linkDataList, oneColumn = false, intlPrefix, onClick, testId }: DropdownListProps) {
    const t = useTranslations();
    return (
        <div className={styles.container} data-testid={testId ?? "" }>
            <nav >
                <ul className={styles[oneColumn ? "list" : "column"]} >
                    {linkDataList.map((elem, index) =>
                        <li key={index}>
                            <Link href={elem.link} onClick={onClick }>
                                {intlPrefix
                                    ? t(`${intlPrefix}.${elem.name}`)
                                    : `${elem.name}`}
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    
    );
}