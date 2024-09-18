import styles from "./DropdownFilterVariants.module.scss";

interface Props {
    dataArray: { name: string, id: number }[];
    filterKey: string,
    defaultValue: number,
}

export default function DropdownFilterVariants({ dataArray, filterKey,defaultValue}: Props) {
    return (
        
        <div className={styles.container}>
            {dataArray.map((item, idx) =>
                <div key={idx}>
                    <input
                        id={filterKey + item.id }
                        type="radio"
                        name={filterKey }
                        value={item.id}
                        defaultChecked={item.id === defaultValue }
                    />
                    <label htmlFor={filterKey + item.id }>{item.name}</label>
                </div>

            )}
            </div>
        
    );
}