import Link from "next/link";
import React from "react";
import styles from "./SliderTitle.module.scss";
import arrowRight from "../assets/arrow-right.svg";
import Image from "next/image";

interface SliderTitleProps {
    title: string,
    href:string
}

export default function SliderTitle({ title, href }:SliderTitleProps) {
    return (
        <Link href={href} className={styles.container }>
            <h3>{title}</h3><Image src={arrowRight} height={16} alt=""/>
        </Link>
    );
}
