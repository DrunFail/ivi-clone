import Image from "next/image";
import styles from "./Avatar.module.scss";

interface AvatarProps {
    urlAvatar: string,
    variant: "medallion" | "profile" | 88
}

const PERSON_PHOTO_SIZES = {
    medallion: {
        height: 44,
        width: 44
    },
    profile: {
        height: 120,//144
        width: 120
    },
    88: {
        height: 88,
        width: 88
    }
}
export default function Avatar({ urlAvatar, variant }: AvatarProps) {
    return (
        <div className={styles.container}>
            <Image
                src={urlAvatar}
                height={PERSON_PHOTO_SIZES[variant].height}
                width={PERSON_PHOTO_SIZES[variant].width}
                alt=""
            />
        </div>
    );
}