import { axiosAuth } from "../lib/axios";
import {PersonFullInfo, PersonListResponse } from "../models/IPerson";

export const getOnePerson = async (id: string) => {
    const res = await axiosAuth.get<PersonFullInfo>(
        `/api/persons/about/${id}`
    );
    
    return res.data;
};

export const getAllPerson = async () => {
    const res = await axiosAuth.get<PersonListResponse>(
        `/api/persons`
    );
    return res.data.rows;
};
