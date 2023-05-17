import { FormattedMessage } from "react-intl";

export default function DefaultWindow() {
    return (
        <>
            <p >
                <FormattedMessage id="PremierFilm" />
            </p>
            <p >
                <FormattedMessage id="NewSubscriptions" />
            </p>
            <p >
                <FormattedMessage id="SerialsAmediateka" />
            </p>
            <p >
                <FormattedMessage id="HighRating" />
            </p>
        </>
    );
};

