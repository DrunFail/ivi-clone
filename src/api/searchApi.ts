import axios from "axios";
import { throttle } from "lodash";
import { domen } from "../constats";
import { IMovieOne } from "../models";
import { IData } from "../models/IApi";

export const searchApi = async (name: string) => {
    const res: IData<IMovieOne[]> = await axios.get(
        `${domen}movies/name?nameRu=${name}`
    );
    return res;
};

export const trotl = throttle(searchApi, 1500);
