import Link from "next/link";
import styles from "./DropdownList.module.scss";

interface DropdownListProps {
    title?: string,
    linkDataList: any[],
    oneColumn: boolean
    
}


export default function DropdownList({title, linkDataList,oneColumn  }: DropdownListProps) {
    return (
        <div className={styles.container}>
            {title && <h3>{title}</h3>}
            <nav >
                <ul className={styles[oneColumn ? "list" : "column"]} >
                    {linkDataList.map((elem, index) => <li key={index }><Link href="">{elem.name}</Link></li>)}
                </ul>
            </nav>
        </div>
    
    );
}