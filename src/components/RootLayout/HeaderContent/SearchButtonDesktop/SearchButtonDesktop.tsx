import { FormattedMessage } from "react-intl";
import styles from "./SearchButtonDesktop.module.scss";
import Button from "../../../UI/core/Button/Button";
import FontIcon from "../../../UI/FontIcon/FontIcon";
export default function SearchButtonContent() {
    return (
        <Button className={styles.button } onlyImage>
            <FontIcon variant="search" />
            <span className={styles.content}>
                <FormattedMessage id="Search" />
            </span>
        </Button>
    );
}