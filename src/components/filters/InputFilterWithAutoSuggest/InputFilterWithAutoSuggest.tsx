import styles from "./InputFilterWithAutoSuggest.module.scss";
import SuggestContent from "./SuggestContent/SuggestContent";
import TextFieldWithLabel from "../../UI/TextFieldWithLabel/TextFieldWithLabel";
import { FilterParams } from "../../../hooks/filters/useFiltersWatchPage";
import Button from "../../UI/core/Button/Button";
import FontIcon from "../../UI/FontIcon/FontIcon";
import FilterName from "../../UI/filter/FilterName/FilterName";
import SelectedFilterValue from "../../UI/filter/SelectedFilterValue/SelectedFilterValue";
import PositionContainer from "../../UI/filter/PositionContainer/PositionContainer";
import FilterWrapperContainer from "../../UI/filter/FilterWrapperContainer/FilterWrapperContainer";
import useInputFilterWithAutoSuggest from "../../../hooks/filters/useInputFilterWihtAuthSuggest";
import { FormattedMessage } from "react-intl";

interface InputFilterProps {
    setFilterParams: (filterKey: keyof FilterParams, filterValue: string | number) => void;
    filterKey: "ACTOR" | "DIRECTOR",
    currentId: string | undefined,
}

export default function InputFilterWithAutoSuggest({ setFilterParams, filterKey, currentId }: InputFilterProps) {
    const {
        selected,
        handleClearParams,
        inputContainerRef,
        queryParams,
        handleChange,
        handleFocus,
        isOpen,
        suggestions,
        handleClick
    } = useInputFilterWithAutoSuggest({ setFilterParams, filterKey, currentId });


    return (
        <div className={styles.wrapper} >
            <FilterName>
                <FormattedMessage id={`label.${filterKey}`} />
            </FilterName>
            {currentId
                ? <div style={{ display: "flex", alignItems: "center", color: "#a5a1b2",columnGap:"5px" }}>
                    <SelectedFilterValue>
                        {selected?.nameRu ?? ""}
                    </SelectedFilterValue>
                    <Button
                        as="button"
                        onlyImage
                        onClick={handleClearParams}
                    >
                        <FontIcon
                            size={12}
                            variant="close"
                        />
                    </Button>
                </div>
                :
                <div ref={inputContainerRef} style={{ position: "relative", inlineSize: "100%", blockSize: "100%" }}>
                    <TextFieldWithLabel
                        labelText="Введите имя"
                        id={filterKey}
                        name={filterKey}
                        value={queryParams.name}
                        onChange={handleChange}
                        onFocus={handleFocus }
                    />

                    {isOpen && suggestions.length > 0 &&
                        <PositionContainer variant="content">
                            <FilterWrapperContainer>
                                <SuggestContent
                                    suggestList={suggestions}
                                    handler={handleClick} />
                            </FilterWrapperContainer>
                        </PositionContainer>
                    }
                </div>}
        </div >
    );
};
