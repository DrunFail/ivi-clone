import { useEffect,  useId,  useState } from "react";
import { useResize } from "../../../../hooks/useResize";

interface UseCarouselProps {
    dataLength: number,
    sizes: { resol: number, items: number }[],
    count: number
}

export default function useCarousel({ dataLength, sizes, count }: UseCarouselProps) {
    const [valueDirection, setValueDirection] = useState(0);
    const [itemAmountOnPage, setItemAmountOnPage] = useState(0);
    const [itemCount, setItemCount] = useState(0);
    const size = useResize();
    const sortedSizes = sizes.sort((a, b) => b.resol - a.resol);
    const lastSize = sortedSizes[sortedSizes.length - 1].items.toString();
    const dataLengthWithShowMoreItem = count > dataLength ? dataLength + 1 : dataLength;

    const sliderId = useId();
    

    useEffect(() => {
        const slider = document.getElementById(sliderId);
        if (!slider) {
            throw new Error("не удалось получить slider по id");
        }
        if (size) {
            const currentSize = sortedSizes.find(elem => elem.resol <= size);
            if (currentSize) {
                setItemAmountOnPage(currentSize.items);
                setItemCount(currentSize.items);
                slider.style.setProperty("--item-amount", currentSize.items.toString());
            } else {
                setItemAmountOnPage(+lastSize);
                setItemCount(+lastSize);
                slider.style.setProperty("--item-amount", lastSize);

            }
        }
        
    }, [size]);

    const handleClickNextSlide = () => {
        const latestElement = dataLengthWithShowMoreItem - itemCount;
        if (latestElement < itemAmountOnPage) {
            setValueDirection(valueDirection => valueDirection - 100 * (latestElement));
            setItemCount(itemCount => itemCount + latestElement);
        } else {
            setValueDirection(valueDirection => valueDirection - 100 * (itemAmountOnPage - 1));
            setItemCount(itemCount => itemCount + itemAmountOnPage - 1);
        }
    };

    const handleClickPrevSlide = () => {
        if (itemCount < itemAmountOnPage * 2 - 1) {
            setValueDirection(valueDirection => valueDirection + 100 * (itemCount - itemAmountOnPage));
            setItemCount(itemCount => itemCount - (itemCount - itemAmountOnPage));
        } else {
            setValueDirection(valueDirection => valueDirection + 100 * (itemAmountOnPage - 1));
            setItemCount(itemCount => itemCount - itemAmountOnPage + 1);
        }
    };
    const checkPrev = itemCount > itemAmountOnPage;
    const checkNext = dataLengthWithShowMoreItem > itemCount;

    return { checkNext, checkPrev, handleClickNextSlide, handleClickPrevSlide, valueDirection, itemAmountOnPage,sliderId};
}
