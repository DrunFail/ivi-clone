import React, { FC, useState } from "react";
import styles from "./Trailer.module.scss";
import Modal from "../../Modal/Modal";
import ReactPlayer from "react-player";
import { FormattedMessage } from "react-intl";

const TrailerMain: FC<{
    trailer?: string;
    content?: React.ReactNode;
    site?: string;
}> = ({ trailer, content = "Трейлер", site = "YOUTUBE" }) => {
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

export default TrailerMain;
