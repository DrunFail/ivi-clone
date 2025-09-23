"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import close from "../../../assets/SVG/Close/Close.svg";
import styles from "./Modal.module.scss";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode,
    visible: boolean,
    callback?: () => void,
    isShowCloseBtn?: boolean,
}

export default function Modal({ visible, children, callback, isShowCloseBtn = true, ...props }: ModalProps) {
    useEffect(() => {
        if (visible) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }
    }, [visible]);

    return (
        <>
            {visible
                ? createPortal(
                    <div className={styles.Modal} {...props }>
                        <div
                            className={styles.Modal__content}
                            onClick={(e: React.MouseEvent) =>
                                e.stopPropagation()
                            }
                        >
                            {children}
                        </div>
                        {isShowCloseBtn &&  <div
                            className={styles.Modal__exit}
                            onClick={callback && callback}
                        >
                            <Image src={close} alt="" />
                        </div>
                        }
                    </div>,
                    document.querySelector("#portal") ?? document.body
                )
                : ""}
        </>
    );
};

