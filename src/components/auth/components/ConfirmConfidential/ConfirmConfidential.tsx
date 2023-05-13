import Link from "next/link";
import React from "react";
import styles from "./ConfirmConfidential.module.scss";

export default function ConfirmConfidential() {
    return (
        <div className={styles.container}>
            <span>Нажимая «Продолжить», я соглашаюсь</span>
            <p>с <Link href="https://www.ivi.ru/info/confidential">Политикой конфиденциальности</Link></p>
            <p>и <Link href="https://www.ivi.ru/info/agreement">Пользовательским соглашением</Link></p>
        </div>
    );
}
