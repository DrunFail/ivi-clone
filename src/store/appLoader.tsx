import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { wrapAsyncFunction } from "../utils/wrapAsyncFunction";
import { getMoviesLoadingStatus, loadMoviesList } from "./movies";
import { AxiosError } from "axios";
import catchError from "../utils/catchError";
import { getActorsLoadingStatus, loadActorsList } from "./actors";
import { getGenresLoadingStatus, loadGenresList } from "./genres";
import { getCountriesLoadingStatus, loadCountriesList } from "./countries";
import Loader from "../components/loader/loader";


/** Higher-Order Component, предназначенный для единоразовой загрузки базы данных, с целью её последующего использования в разных частях приложения, без необходимости повторной загрузки страницы. */
const AppLoader = ({
    children
}: {
    children: React.ReactElement;
}): React.ReactElement => {
    const dispatch = useAppDispatch();
    const isMoviesLoading = useAppSelector(getMoviesLoadingStatus());
    const isActorsLoading = useAppSelector(getActorsLoadingStatus());
    const isGenresLoading = useAppSelector(getGenresLoadingStatus());
    const isCountriesLoading = useAppSelector(getCountriesLoadingStatus());

    /** Функция вызывает загрузку данных с сервера. */
    const fetchData = async () => {
        try {
            await Promise.all([
                dispatch(loadMoviesList()),
                dispatch(loadActorsList()),
                dispatch(loadGenresList()),
                dispatch(loadCountriesList())
            ]);
        } catch (e) {
            const error = e as AxiosError;
            catchError(error);
        }
    };

    useEffect(wrapAsyncFunction(fetchData), []);

    if (isMoviesLoading || isActorsLoading || isGenresLoading || isCountriesLoading) return <Loader/>;

    return <>{children}</>;
};

export default AppLoader;
