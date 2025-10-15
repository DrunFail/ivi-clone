import { useEffect, useRef, useState } from 'react';
import { PersonSuggest } from '../../models/types';
import { useDebounce } from '../useDebounce';
import { NewPersonAPI } from '../../api/newPersonAPI';
import useOutsideClick from '../useOutsideClick';
import { FilterParams } from './useFiltersWatchPage';

interface UseInputFilterWithAutoSuggestProps {
    setFilterParams: (filterKey: keyof FilterParams, filterValue: string | number) => void;
    filterKey: 'ACTOR' | 'DIRECTOR';
    currentId: string | undefined;
}

const profession = {
    ACTOR: 'актер',
    DIRECTOR: 'режиссер',
};

export default function useInputFilterWithAutoSuggest({
    setFilterParams,
    filterKey,
    currentId,
}: UseInputFilterWithAutoSuggestProps) {
    const [suggestions, setSuggestions] = useState<PersonSuggest[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [queryParams, setQueryParams] = useState({ profession: profession[filterKey], name: '', size: 6 });
    const [selected, setSelected] = useState<PersonSuggest | null>(null);
    const debouncedQueryParams = useDebounce(queryParams, 300);

    useEffect(() => {
        if (queryParams.name) {
            const fetchPersons = async (params: typeof debouncedQueryParams) => {
                try {
                    const response = await NewPersonAPI.getPersonSuggest(params);
                    setSuggestions(response.rows);
                } catch (error) {
                    console.log(error);
                }
            };
            fetchPersons(debouncedQueryParams);
        }
    }, [debouncedQueryParams, debouncedQueryParams.name, queryParams.name]);

    function handleFocus(): void {
        setIsOpen(true);
    }
    function handleBlur(): void {
        setIsOpen(false);
    }
    const inputContainerRef = useRef(null);
    useOutsideClick(inputContainerRef, handleBlur);

    const handleClick = (suggestion: PersonSuggest) => {
        setQueryParams({ ...queryParams, name: suggestion.nameRu });
        setFilterParams(filterKey, suggestion.personId);
        setSelected(suggestion);
        setIsOpen(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQueryParams({ ...queryParams, name: e.target.value });
    };

    const handleClearParams = () => {
        setFilterParams(filterKey, '');
        setQueryParams({ ...queryParams, name: '' });
        setSuggestions([]);
        setSelected(null);
    };
    useEffect(() => {
        if (!currentId && debouncedQueryParams.name) {
            handleClearParams();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentId, debouncedQueryParams.name]);

    return {
        inputContainerRef,
        selected,
        handleClearParams,
        queryParams,
        handleChange,
        handleFocus,
        isOpen,
        suggestions,
        handleClick,
    };
}
