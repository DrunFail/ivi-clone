"use client"

import FontIcon from "../../UI/FontIcon/FontIcon";
import TextFieldWithLabel from "../../UI/TextFieldWithLabel/TextFieldWithLabel";
import Button from "../../UI/core/Button/Button";
import FilterName from "../../UI/filter/FilterName/FilterName";
import SelectedFilterValue from "../../UI/filter/SelectedFilterValue/SelectedFilterValue";
import AutoSuggestContainer from "./AutoSuggestContainer";

interface Props {
    filterKey: string,
    filterName: string
}


export default function AutoSuggestFilter({filterKey,filterName }:Props) {
    return (
        <AutoSuggestContainer filterKey={filterKey}>
            <FilterName>
                {filterName}
            </FilterName>

            <TextFieldWithLabel
                labelText="Введите имя"
                id={`${filterKey}-search`}
                name={`${filterKey}-search`}
                defaultValue={"" }
            />

            <div>
                <SelectedFilterValue id={filterKey}>
                    {""}
                </SelectedFilterValue>
                <Button
                    as="button"
                    onlyImage
                >
                    <FontIcon
                        size={12}
                        variant="close"
                    />
                </Button>
            </div>
        </AutoSuggestContainer>
    
    );
}