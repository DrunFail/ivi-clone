import Image from "next/image";
import { IStaff } from "../../../../models";
import styles from "./StaffCard.module.scss";

interface StaffCardProps {
    elem: IStaff
}
export default function StaffCard({ elem }: StaffCardProps) {
    console.log('staff', elem)
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