//import { FormattedMessage } from "react-intl";
//import ToggleMovie from "../ToggleMovie/ToggleMovie";
//import styles from '../../../../../pages/movie/movies.module.scss';
//import { useSelector } from "react-redux";
//import { getFilm } from "../../../../../store/film";

//export default function Description() {
//    const films = useSelector(getFilm());
//    console.log(films)
//    return (
//        <div className={styles.Movie__description}>
//            <ToggleMovie
//                nameEnd={<FormattedMessage id="ToggleMovieHide" />}
//                nameStart={<FormattedMessage id="ToggleMovieShow" />}
//            >
                
//                <div>
//                    <div className={styles.Description__lang}>
//                        <h4>
//                            <FormattedMessage id="Slogan" />
//                        </h4>
//                        <h4>{films?.film.slogan}</h4>
//                    </div>
//                </div>
//            </ToggleMovie>
//        </div>
//    );
//};


