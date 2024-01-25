import { axiosAuth } from "../lib/axios"

export const NewPersonAPI = {
    getAllPersonList: async (personQueryParams: {page?: number, size?: number,name?: string}) => {
        const response = await axiosAuth.request({
            url: `/api/persons`,
            method: "get",
            params: personQueryParams
        })
        return response
    },
    getPersonById: async (personId: number) => {
        const response = await axiosAuth.request({
            url: `/api/persons/about/${personId}`,
            method: "get"
        })
        return response
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