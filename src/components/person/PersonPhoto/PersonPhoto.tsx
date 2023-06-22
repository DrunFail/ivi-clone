import Image from "next/image";
import styles from "./PersonPhoto.module.scss";
export default function PersonPhoto({ urlPersonPhoto }: {urlPersonPhoto: string}) {
    return (
        <div className={styles.container }>
        <Image
            src={urlPersonPhoto}
                height={44}
                width={44}
            
            alt=""
            />
        </div>
    );
}