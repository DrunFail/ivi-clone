import { zhanr } from "../../consts/HeaderConst";
import DropdownList from "../DropdownList/DropdownList";
import styles from "./HeaderDropdown.module.scss";




export default function HeaderDropdown() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                
                <DropdownList title="genre" linkDataList={zhanr} oneColumn={false} />
               
                <DropdownList title="страны" linkDataList={[{ name: "own" }, { name: "usa" }, { name: "euro" }, {name: "another"}] } oneColumn/>
                <DropdownList title="годы" linkDataList={[{ name: "2023" }, { name: "2022" }, {name: "2021"}] } oneColumn/>
            </div>
            <div>another content</div>

        </div>
    );
}