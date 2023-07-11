import AccordionItem from "../../UI/AccordionItem/AccordionItem";
import BackgroundContainer from "../components/BackgroundContainer/BackgroundContainer";
import FilterName from "../components/FilterName/FilterName";
import PositionContainer from "../components/PositionContainer/PositionContainer";
import SelectedFilterValue from "../components/SelectedFilterValue/SelectedFilterValue";
import DropdownFilterContent from "./DropdownFilterContent/DropdownFilterContent";

interface DropdownFilterProps {
    name: "genre" | "country";
    first: boolean;
    clearArray?: any,
    testId: string,
    testHandler: (filterKey: string, filterValue: string) => void;
    initValue: number
}

export default function DropdownFilter({ name, clearArray, testId, testHandler, initValue }: DropdownFilterProps) {
    const prop = name + "NameEng";

    const handleClick = (id: string) => {
        testHandler(testId, id)
    }

    return (
        <>
            <AccordionItem
                outClick
                heading={
                    <div>
                        <FilterName intlId={testId} />
                        <SelectedFilterValue variant={"intlId"} intlId={`${name}.${initValue}.title`} />
                    </div>
                }
                headingVariant={"spaceBetween"}
                content={
                    <PositionContainer variant="content">
                        <BackgroundContainer>
                            <DropdownFilterContent
                                dataArray={clearArray}
                                testId={testId}
                                onClickHandler={handleClick}
                                prop={prop}
                                name={name}
                            />
                        </BackgroundContainer>
                    </PositionContainer>
                }
            />

        </>

    );
};


