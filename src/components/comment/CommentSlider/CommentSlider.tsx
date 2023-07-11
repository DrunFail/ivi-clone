import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { getFilm } from "../../../store/film";
import { REVIEWLIST_SIZE } from "../../Movie/MovieList/constants/constants";
import Carousel from "../../UI/Carousel/Carousel";
import MyButton from "../../UI/MyButton/MyButton";
import CommentCard from "../CommentCard/CommentCard";
import EmptyCommentCard from "../EmptyCommentCard/EmptyCommentCard";
import styles from "./CommentSlider.module.scss";

const comm = [
    {
        id: 1,
        filmId: 1111,
        text: "dkdkd",
        name: "skdkdk",
        reviews: [],
        createdAt: "11"
    }, {
        id: 2,
        filmId: 1111,
        text: "dkdkd",
        name: "skdkdk",
        reviews: [],
        createdAt: "11"
    },
    {
        id: 3,
        filmId: 1111,
        text: "dkdkd",
        name: "skdkdk",
        reviews: [],
        createdAt: "11"
    }, {
        id: 4,
        filmId: 1111,
        text: "dkdkd",
        name: "skdkdk",
        reviews: [],
        createdAt: "11"
    }
    

]

export default function CommentSlider({ callback }: { callback: () => void }) {

    const router = useRouter();
    const { id } = router.query;
    console.log(id)
    const film = useSelector(getFilm());
    return (
        <div className={styles.container}>
            
            <div className={styles.text }>
                    <h1 onClick={() => callback()}>
                        <FormattedMessage id="Review" />
                    </h1>
                    <p>about movie {film?.film?.nameRu}</p>
            </div>
                <MyButton type="button" bg_color="footer" size="large" onClick={callback}>
                    Comments
                </MyButton>
            <div className={styles.slider }>
            {comm.length
                ? <Carousel
                    href={`/movie/${String(id)}?type=review`}
                    mode={"slider"}
                    carouselId={"com"}
                    data={comm }
                    count={40}
                    sizes={REVIEWLIST_SIZE}
                    callback={() => callback()}
                    component={CommentCard}
                />
                : <EmptyCommentCard />

            }
            </div>

        </div>
    );

}