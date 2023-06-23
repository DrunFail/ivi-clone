import Image from "next/image";
import styles from "./PersonPhoto.module.scss";

interface PersonPhotoProps {
    urlPersonPhoto: string,
    variant: "medallion" | "profile"
}

const PERSON_PHOTO_SIZES = {
    medallion: {
        height: 44,
        width: 44
    },
    profile: {
        height: 144,
        width: 120
    }
}
export default function PersonPhoto({ urlPersonPhoto, variant }: PersonPhotoProps) {
    return (
        <div className={styles.container}>
            <Image
                src={urlPersonPhoto}
                height={PERSON_PHOTO_SIZES[variant].height}
                width={PERSON_PHOTO_SIZES[variant].width}
                alt=""
            />
        </div>
    );
}