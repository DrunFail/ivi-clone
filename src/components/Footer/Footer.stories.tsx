import Footer from "./Footer";
import styles from "../Layout/Layout.module.scss";
import "../../../styles/index.scss";
export default {
    title: "Footer",
    component: Footer
};

export const Default = () => (
    <body>
        <div className={styles.Layout__footer}>
            <Footer />
        </div>
    </body>
);
