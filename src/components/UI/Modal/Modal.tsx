import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import close from "../../../assets/SVG/Close/Close.svg";
import styles from "./Modal.module.scss";

interface ModalProps {
    children: React.ReactNode
    visible: boolean
    callback: () => void
}

export default function Modal({ visible, children, callback }:ModalProps){
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
                      <div className={styles.Modal}>
                          <div
                              className={styles.Modal__content}
                              onClick={(e: React.MouseEvent) =>
                                  e.stopPropagation()
                              }
                          >
                              {children}
                          </div>
                          <div
                              className={styles.Modal__exit}
                              onClick={() => {
                                  callback();
                              }}
                          >
                              <Image src={close} alt="" />
                          </div>
                      </div>,
                    document.querySelector("#portal") ?? document.body
                  )
                : ""}
        </>
    );
};

