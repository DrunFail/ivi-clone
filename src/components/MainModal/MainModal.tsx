import TrailerModal from "./components/TrailerModal/TrailerModal";
import styles from "./MainModal.module.scss";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import TrailerTab from "./components/TrailerTab/TrailerTab";
import Tab from "./components/Tab/Tab";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import { getFilm } from "../../store/film";
import ReviewModal from "./components/RevieModal/ReviewModal";
import Creaters from "./components/Creaters/Creaters";
import ReviewForm from "./components/ReviewForm/ReviewForm";
import Modal from "../UI/Modal/Modal";
import Actors from "../person/Actors/Actors";

const MainModal = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const film = useSelector(getFilm());
    const router = useRouter();
    const { id, type } = router.query;

    const pushQuery = async (type: string) => {
        await router.push({
            pathname: "/movie/" + String(id),
            query: { type }
        });
    };

    useEffect(() => {
        if (type) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [type]);

    const removeQueryParam = async () => {
        await router.push({
            pathname: "/movie/" + String(id)
        });
    };

    return (
        <section>
            <Actors callback={() => pushQuery("actors")} />
            <TrailerModal callback={() => pushQuery("trailer")} />
            <ReviewModal callback={() => pushQuery("review")} />

            <Modal visible={visible} callback={() => removeQueryParam()}>
                <div className={styles.Container}>
                    <div className={styles.MainModal}>
                        <h1 className={styles.MainModal__h1}>
                            {film?.film?.nameRu}
                        </h1>
                        <div className={styles.MainModal__tabs}>
                            <Tab
                                nameBtn={<FormattedMessage id="Creaters" />}
                                typ={"actors"}
                            />
                            <Tab
                                nameBtn={<FormattedMessage id="Review" />}
                                typ={"review"}
                            />
                            {film?.film?.trailers?.length && (
                                <Tab
                                    nameBtn={<FormattedMessage id="trailer" />}
                                    typ={"trailer"}
                                />
                            )}
                        </div>
                        <div className={styles.MainModal__content}>
                            {type === "actors" ? (
                                <Creaters />
                            ) : type === "trailer" ? (
                                <TrailerTab />
                            ) : (
                                <ReviewForm />
                            )}
                        </div>
                    </div>
                    <div className={styles.Info}>
                        <Image
                            width={120}
                            height={210}
                            alt=""
                            src={film?.film?.posterUrl || ""}
                        />
                        
                        {/*<RatingOverlay*/}
                        {/*    raiting={film?.currentFilm?.ratingKinopoisk || "0"}*/}
                        {/*    raitingArr={{ a: 1, b: 2, c: 3, d: 4 }}*/}
                        {/*/>*/}
                        <p>
                            {film?.film?.year},{" "}
                            {film?.film?.countries?.map((country) => (
                                <p key={country.id}>{country.countryNameRu}</p>
                            ))}
                        </p>
                    </div>
                </div>
            </Modal>
        </section>
    );
};

export default MainModal;
