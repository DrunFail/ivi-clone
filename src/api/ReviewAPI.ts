import { AxiosInstance } from "axios"
import { ResponseWithCountAndRows } from "../models/response"
import { ReviewTree } from "../models/types"
import { axiosAuth } from "../lib/axios"
import useAxiosAuth from "../components/auth/hooks/useAxiosAuth";


export const ReviewAPI = {
    createReview: async (reviewData: {filmId:number,parentId?:number,title:string,text:string},axios:AxiosInstance) => {
        const response = await axios.request({
            url: `/api/reviews`,
            method: "post",
            
            data: reviewData
        })
        return response
    },
    getReviewById: async (reviewId:number) => {
        const response = await axiosAuth.request({
            url: `/api/reviews/single/${reviewId}`,
            method: "get"
        })
        return response
    },
    getReviewTreeByTopLevelReviewId: async (topLevelReviewId:number,depth?:number) => {
        const response = await axiosAuth.request({
            url: `/api/reviews/tree/${topLevelReviewId}`,
            method: "get",
            params: {depth: depth}
        })
        return response
    },
    getReviewTreeByMovieId: async (movieId: number, depth?:number) => {
        const response = await axiosAuth.request<ReviewTree[]>({
            url: `/api/reviews/film/${movieId}`,
            method: "get",
            params: {depth:depth}
        })
        return response
    },
    getReviewTopLevelByKinopoiskId: async (kinopoiskId: number) => {
        const response = await axiosAuth.request < ResponseWithCountAndRows<ReviewTree>>({
            url: `/api/reviews/film/top/${kinopoiskId}`,
            method: "get"
        })
        return response
    },
    deleteTreeReviewByParentId: async (parentReviewId: number) => {
        const response = await axiosAuth.request({
            url: `/api/reviews/${parentReviewId}`,
            method: "delete"
        })
        return response
    }

}