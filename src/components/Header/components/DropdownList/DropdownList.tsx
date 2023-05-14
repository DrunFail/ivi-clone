import styles from "./DropdownList.module.scss";

interface DropdownListProps {
    title: string,
    linkDataList: any[],
    oneColumn: boolean
    
}


export default function DropdownList({title, linkDataList,oneColumn  }: DropdownListProps) {
    return (
        <div className={styles.container}>
            <h3>{title}</h3>
            <div className={styles[oneColumn ? "list" : "column"]}>
                {linkDataList.map(elem => <p>{elem.name}</p>) }
            </div>
        </div>
    
    );
}