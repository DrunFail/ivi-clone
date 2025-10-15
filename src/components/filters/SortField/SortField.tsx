import { useTranslations } from 'next-intl';
import SelectedSort from './SelectedSort/SelectedSort';
import SortFieldContainer from './SortFieldContainer/SortFieldContainer';
import SortFieldVariants from './SortFieldVariants/SortFieldVariants';

interface Props {
    defaultSortValue: string;
    variants: string[];
    filterKey: string;
}

export default function SortField({ defaultSortValue, variants, filterKey }: Props) {
    const t = useTranslations();
    return (
        <SortFieldContainer>
            <SelectedSort currentSortVariant={t(`sort.variant.${defaultSortValue}`)} />
            <SortFieldVariants>
                {variants.map((item, idx) => (
                    <div key={idx}>
                        <input
                            id={`sortBy-${item}`}
                            type="radio"
                            name={filterKey}
                            defaultChecked={item === defaultSortValue}
                            value={item}
                        />
                        <label htmlFor={`sortBy-${item}`}>{t(`sort.variant.${item}`)}</label>
                    </div>
                ))}
            </SortFieldVariants>
        </SortFieldContainer>
    );
}
