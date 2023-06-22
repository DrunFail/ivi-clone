import {useState } from "react";
import styles from "./Trailer.module.scss";
import ReactPlayer from "react-player";
import { FormattedMessage } from "react-intl";
import Modal from "../UI/Modal/Modal";

interface TrailerMainProps {
    trailer?: string,
    content?: React.ReactNode,
    site?:string
}
export default function TrailerMain({ trailer, content = "Трейлер", site = "YOUTUBE" }:TrailerMainProps){
    const [visible, setVisible] = useState<boolean>(false);

    return (
        <>
            <>
                <div
                    className={styles.Content}
                    onClick={() => setVisible(true)}
                >
                    {content}
                </div>
                <Modal callback={() => setVisible(false)} visible={visible}>
                    <div className={styles.Trailer}>
                        {site === "YOUTUBE" ? (
                            <ReactPlayer url={trailer} />
                        ) : (
                            <h1>
                                <FormattedMessage id="Error" />
                            </h1>
                        )}
                    </div>
                </Modal>
            </>
        </>
    );
};


