import { useState } from "react";
import MovieDescription from "../moviePageComponents/MovieDescription/MovieDescription";
import ButtonHide from "./ButtonHide/ButtonHide";

interface MovieHideInfoContainerProps {
    movieDescription: string,
    isHideText: React.ReactNode,
    notIsHideText: React.ReactNode,
    children?: React.ReactNode
}

export default function MovieHideInfoContainer({ movieDescription,isHideText,notIsHideText,children }: MovieHideInfoContainerProps) {
    const [isHide, setIsHide] = useState(true)

    const isHideToggle = () => {
        setIsHide(isHide => !isHide)
    }
    return (
        <>
            <MovieDescription isHide={isHide}>
                {movieDescription}
            </MovieDescription>

            {!isHide && children}

            <ButtonHide
                isHide={isHide}
                isHideToggle={isHideToggle}
                isHideText={isHideText}
                notIsHideText={notIsHideText }
            />
        </>
    
    );
}