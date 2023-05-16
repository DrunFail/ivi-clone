import Image from "next/image";
import Link from "next/link";
import FadeBottomTop from "../FadeBottomTop/FadeBottomTop";
import FilmTitleTop from "../FilmTitleTop/FilmTitleTop";
import NumberRatingTop from "../NumberRatingTop/NumberRatingTop";
import styles from "./TopTenItem.module.scss";

interface TopTenItemProps {
    elem: { id: number, href: string }
}

export default function TopTenItem({ elem }:TopTenItemProps) {
    return (
        <Link href={elem.href }>
            <div className={styles.item }>
                <div className={styles.container }>
                    <Image src={`/top10/${elem.id}.jpg`} fill alt='' />
                </div>
                <FadeBottomTop>
                    <FilmTitleTop raiting={elem.id} />
                    <NumberRatingTop rating={elem.id} />
                </FadeBottomTop>
            </div>
        </Link>

    );
}
