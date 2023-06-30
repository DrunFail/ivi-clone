import { useState } from "react";
import AccordionContent from "./AccordionContent/AccordionContent";
import AccordionHeading from "./AccordionHeading/AccordionHeading";

interface AccordionItemProps {
    heading: React.ReactNode;
    content: React.ReactNode
}
export default function AccordionItem({heading,content }:AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        setIsOpen(isOpen => !isOpen)
    }

    return (
        <>
            <AccordionHeading toggleVisible={toggleOpen} isOpen={isOpen}>
                {heading }
            </AccordionHeading>
            {isOpen &&
                <AccordionContent>
                    {content}
                </AccordionContent>
            }
        </>
    );
}