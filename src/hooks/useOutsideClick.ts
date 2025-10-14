import { RefObject, useEffect } from "react";

type Handler = (e: MouseEvent) => void



export default function useOutsideClick<T extends HTMLElement | null>(
    ref: RefObject<T> | null,
    handler: Handler,

): void {
    useEffect(() => {
        const listener = (e: MouseEvent) => {
            if (!ref?.current || ref.current.contains(e.target as HTMLElement)) {
                return;
            }
            handler(e);
        };
        document.addEventListener('mousedown', listener);


        return () => {
            document.removeEventListener('mousedown', listener);

        };
    }, [ref, handler])
}