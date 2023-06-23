import { useState } from "react";
import styles from "./Rating.module.scss";
import { FormattedMessage } from "react-intl";
import MedallionContent from "../PageContainers/MedallionContent/MedallionContent";
import RatingBlock from "./RatingBlock/RatingBlock";
import MedallionDescription from "../PageContainers/MedallionDescription/MedallionDescription";
import RatingLarge from "./RatingLarge/RatingLarge";
import RatingModal from "./RatingModal/RatingModal";

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
                    
                {variant === "small" && 
                    <>
                        <MedallionContent>
                            <RatingBlock ratingValue={movieRating} />
                        </MedallionContent>
                        <MedallionDescription>
                            <div>
                                <p>Рейтинг</p>
                                <p>Иви</p>
                            </div>
                        </MedallionDescription>

                    </>
            }
                   
                
            </div>
            <RatingModal
                visible={visible}
                call={call} />
        </>
    );
};

