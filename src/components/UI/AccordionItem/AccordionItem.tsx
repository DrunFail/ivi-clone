import { useRef, useState } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import AccordionContent from "./AccordionContent/AccordionContent";
import AccordionHeading from "./AccordionHeading/AccordionHeading";

interface AccordionItemProps {
    heading: React.ReactNode;
    content: React.ReactNode;
    headingVariant: "content" | "spaceBetween";
    outClick?: boolean
}
export default function AccordionItem({heading,content, headingVariant, outClick=false }:AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(isOpen => !isOpen)
    }
    const closeDropdown = () => {
        if (outClick) {
            setIsOpen(false)
        }
        
    }
    const ref = useRef(null)
    useOutsideClick(ref, closeDropdown)

    return (
        <div ref={ref }>
            <AccordionHeading toggleVisible={toggleOpen} isOpen={isOpen} variant={headingVariant }>
                {heading }
            </AccordionHeading>
            {isOpen &&
                <AccordionContent>
                    {content}
                </AccordionContent>
            }
        </div>
    );
}