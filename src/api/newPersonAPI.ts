import { axiosAuth } from "../lib/axios"
import { ResponseWithCountAndRows } from "../models/response"
import { DetailedPerson, Person } from "../models/types"

export const NewPersonAPI = {
    getAllPersonList: async (personQueryParams?: {page?: number, size?: number,name?: string}) => {
        const response = await axiosAuth.request<ResponseWithCountAndRows<Person>>({
            url: `/api/persons`,
            method: "get",
            params: personQueryParams
        })
        return response.data.rows
    },
    getPersonById: async (personId: number) => {
        const response = await axiosAuth.request<DetailedPerson>({
            url: `/api/persons/about/${personId}`,
            method: "get"
        })
        return response.data
    },
    getPersonSuggest: async (personSuggestQueryParams: {profession: string, name: string, size?: number}) => {
        const response = await axiosAuth.request({
            url: `/api/persons/search`,
            method: "get",
            params: personSuggestQueryParams
        })
        return response
    }

}