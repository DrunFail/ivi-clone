//import {  useState } from "react";
//import styles from "./ToggleMovie.module.scss";

//interface ToggleMovieProps {
//    children: React.ReactNode,
//    heigth?: string,
//    nameEnd: React.ReactNode,
//    nameStart: React.ReactNode
//}
//export default function ToggleMovie({
//    children,
//    heigth,
//    nameStart,
//    nameEnd
//}:ToggleMovieProps) {
//    const [bol, setBol] = useState<boolean>(false);

//    return (
//        <div>
//            <div
//                style={{
//                    overflow: "hidden",
//                    height: bol ? "100%" : heigth || "150px"
//                }}
//            >
//                {children}
//            </div>
//            <p className={styles.ToggleMovie} onClick={() => setBol((p) => !p)}>
//                {bol ? <>{nameStart}</> : <>{nameEnd}</>}
//            </p>
//        </div>
//    );
//};


