import React, { FC } from "react";
import { useSelector } from "react-redux";
import { getLoader } from "../../../store/loader";
import Loader from "../../ui/Loader/loader";

const LoaderReq = () => {
    const visible = useSelector(getLoader());

    if (visible) {
        return <Loader></Loader>;
    }
    return <></>;
};

export default LoaderReq;
