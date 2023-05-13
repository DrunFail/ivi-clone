import Rating from "../Rating/Rating";
import styles from "../../movies.module.scss";
import React from "react";
import MediaQuery from "react-responsive";
import Description from "./components/Description/Description";
import Buttons from "./components/Buttons/Button";
import ActorsList from "./components/ActorsList/ActorsList";
import CountryList from "./components/CountryList/CountryList";
import Info from "./components/Info/Info";

const ContentBlock = () => {
    return (
        <div className={styles.Movie}>
            <div className={styles.Movie__media}>
                <div className={styles.Movie__video2}>
                    <MediaQuery maxWidth={1236}>
                        <Info/>
                        <CountryList />
                    </MediaQuery>
                    <div className={styles.Movie__video}></div>
                    <Buttons />
                </div>
            </div>
            <div className={styles.Movie__info}>
                <MediaQuery minWidth={1237}>
                    <Info />
                    <CountryList />
                </MediaQuery>

                <div className={styles.Movie__block}>
                    <Rating type={false} />
                    <ActorsList />
                </div>
                <Description />
                <div className={styles.Movie__rating}>
                    <Rating type={true} />
                </div>
            </div>
        </div>
    );
};

export default ContentBlock;
