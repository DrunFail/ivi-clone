import React, { FC } from "react";
import styles from "./Window.module.scss";

const Window: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <>{children}</>;
};

export default Window;
