import axios from "axios";
import { domen } from "../constats";
import { IMovieOne, IStaff } from "../models";
import { IData, IDataRows } from "../models/IApi";

export const getOneMovie = async (id: string) => {
    const res: IData<IMovieOne> = await axios.get(
        `${domen}movies/about/${id}`
    );
    return res.data;
};

export const getAllMovie = async () => {
    const res: IDataRows = await axios.get(
        `${domen}movies/`
    );
    return res.data.rows;
};

export const staffAll = async (id: string) => {
    const res: IData<IStaff[]> = await axios.get(
        `${domen}movies/about/${id}/staff`
    );

    return res.data;
};
