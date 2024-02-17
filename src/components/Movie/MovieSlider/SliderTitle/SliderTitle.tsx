import Link from "next/link";
import React from "react";
import styles from "./SliderTitle.module.scss";
import arrowRight from "../assets/arrow-right.svg";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

interface SliderTitleProps {
    href: string,
    withArrow?: boolean,
    defaultIntl?: string,
    intlId?: string,
}

export default function SliderTitle({ href, withArrow = true,defaultIntl, intlId, }: SliderTitleProps) {
    return (
        <Link href={href} className={styles.container}>
            <h3>
                <FormattedMessage id={intlId} defaultMessage={defaultIntl}  />
            </h3>
            {withArrow && <Image src={arrowRight} height={16} alt="" />}
        </Link>
    );
}
