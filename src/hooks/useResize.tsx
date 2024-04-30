"use client";

import { useState, useEffect } from 'react';


export const useResize = () => {
    const [size, setSize] = useState(0);

    const handleResize = () => {
        const width = window.innerWidth;
        setSize(width);
    };
    useEffect(() => {
        handleResize();
    },[])

    useEffect(() => {
            window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return size;

};
