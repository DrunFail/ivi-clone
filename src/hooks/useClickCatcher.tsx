import React, { useContext, useState } from 'react';

interface IClickCatcherContextProps {
    elemInFocus: Element | null;
}

const defaultSort = {
    elemInFocus: null,
};

const ClickCatcherContext = React.createContext<IClickCatcherContextProps>(defaultSort);

/** Кастомный хук, отслеживающий на уровне всего приложения, был ли сделан клик по заданному классу. */
export const useClickCatcher = () => {
    return useContext(ClickCatcherContext);
};

/** Higher-Order Component, предназначенный для отлавливания кликов на уровне всего приложения. */
const ClickCatcherProvider = ({ children }: { children: React.ReactElement }) => {
    const [elemInFocus, setElemInFocus] = useState<Element | null>(null);

    /** Функция отслеживает клик на всей площади экрана и меняет заранее заготовленный переключатель, по факту клика на заданный HTML-элемент. */
    const clickCatcher = (e: React.MouseEvent<HTMLElement>) => {
        if (e.target instanceof Element) {
            setElemInFocus(e.target);
        }
    };

    return (
        <ClickCatcherContext.Provider
            value={{
                elemInFocus,
            }}
        >
            <div onClick={clickCatcher}>{children}</div>
        </ClickCatcherContext.Provider>
    );
};

export default ClickCatcherProvider;
