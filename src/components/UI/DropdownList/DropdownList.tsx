import Link from "next/link";
import styles from "./DropdownList.module.scss";
import { FormattedMessage } from "react-intl";
import { LinkData } from "../../../models/global";

interface DropdownListProps {
    title?: string,
    linkDataList: LinkData[],
    oneColumn?: boolean,
    intlPrefix?: string,
    onClick?: () => void,
    testId?:string
    
}


export default function DropdownList({ title, linkDataList, oneColumn=false, intlPrefix,onClick,testId }: DropdownListProps) {
    return (
        <div className={styles.container} data-testid={testId ?? "" }>
            {title && <h3><FormattedMessage id={title} /></h3>}
            <nav >
                <ul className={styles[oneColumn ? "list" : "column"]} >
                    {linkDataList.map((elem, index) =>
                        <li key={index}>
                            <Link href={elem.link} onClick={onClick }>
                                {intlPrefix
                                    ? <FormattedMessage id={`${intlPrefix}.${elem.name}`} />
                                    : `${elem.name}`}
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </div>
    
    );
}