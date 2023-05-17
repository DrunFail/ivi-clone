import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import React from "react";
import { getPerson } from "../../store/person";

const FilmTitle = () => {
    const person = useSelector(getPerson());

    return (
        <h2>
            <FormattedMessage id="FullFilmography" />{" "}
            <span>
                {person?.films?.length} <FormattedMessage id="Films" />
            </span>
        </h2>
    );
};

export default FilmTitle;
