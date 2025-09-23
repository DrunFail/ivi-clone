import Image from "next/image";
import FadeBottomTop from "../FadeBottomTop/FadeBottomTop";
import FilmTitleTop from "../FilmTitleTop/FilmTitleTop";
import NumberRatingTop from "../NumberRatingTop/NumberRatingTop";
import styles from "./TopTenItem.module.scss";
import { Link } from "../../../../navigation";

interface TopTenItemProps {
    elem: { id: number, href: string, name: string }
}

export default function TopTenItem({ elem }: TopTenItemProps) {
    return (
        <Link
            href={elem.href}
            aria-label={`перейти на страницу фильма ${elem.name}`}
        >
            <div className={styles.item}>
                <div className={styles.container}>
                    <Image
                        src={`/top10/${elem.id}.jpg`}
                        fill
                        alt=''
                        sizes="
(max-width: 599px) 50vw,
(max-width: 880px) 33vw,
(max-width: 1254px) 25vw,
20vw
"
                    />

                </div>
                <FadeBottomTop>
                    <FilmTitleTop rating={elem.id} />
                    <NumberRatingTop rating={elem.id} />
                </FadeBottomTop>
            </div>
        </Link>

    );
}
