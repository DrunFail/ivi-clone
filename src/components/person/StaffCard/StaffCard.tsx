import Image from "next/image";
import styles from "./StaffCard.module.scss";
import { IStaff } from "../../../models";

interface StaffCardProps {
    elem: IStaff
}
export default function StaffCard({ elem }: StaffCardProps) {
    return (
        <div className={styles.container}>
            <div>
                <Image
                    src={elem?.posterUrl}
                    alt=""
                    width={88}
                    height={88}
                />
            </div>
            <p className={styles.Name}>{elem?.nameRu}</p>
            <p className={styles.Prof}>{elem?.profession.split(",")[0]}</p>
        </div>
    );
}