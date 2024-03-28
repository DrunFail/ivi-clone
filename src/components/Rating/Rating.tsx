import { useState } from "react";
import styles from "./Rating.module.scss";
import { FormattedMessage } from "react-intl";
import RatingBlock from "./RatingBlock/RatingBlock";
import RatingLarge from "./RatingLarge/RatingLarge";
import dynamic from "next/dynamic";

const RatingModal = dynamic(() =>
    import("./RatingModal/RatingModal").then((mod) => mod.default))


interface RatingProps {
    variant: "small" | "large",
    movieRating: number
}

export default function Rating({ variant,movieRating }: RatingProps) {
    const [visible, setVisible] = useState<boolean>(false);
    const [slide, setSlide] = useState<number>(0);

    const slideMove = (num: number) => {
        setSlide((p) => p + num);
    };



    const call = () => {
        setSlide(0);
        setVisible(false);
    };

    return (
        <>
            <div onClick={() => setVisible(true)} className={styles.container}>
                {variant === "large" &&
                    <RatingLarge>
                        <RatingBlock ratingValue={movieRating} />
                        <p><FormattedMessage id="RatingIvi" /></p>
                        <div className={styles.Rating__review}>
                            <p><FormattedMessage id="Estimate" /></p>
                        </div>
                    </RatingLarge>
                }
                    
            {/*    {variant === "small" && */}
            {/*        <>*/}
            {/*            <MedallionContent>*/}
            {/*                <RatingBlock ratingValue={movieRating} />*/}
            {/*            </MedallionContent>*/}
            {/*            <MedallionDescription>*/}
            {/*                <div>*/}
            {/*                    <span>Рейтинг</span>*/}
            {/*                    <span>Иви</span>*/}
            {/*                </div>*/}
            {/*            </MedallionDescription>*/}

            {/*        </>*/}
            {/*}*/}
                   
                
            </div>
            <RatingModal
                visible={visible}
                call={call} />
        </>
    );
};

