import { ChangeEvent, useState } from "react";
import { ReviewTree } from "../../models/types";
import useAxiosAuth from "../auth/useAxiosAuth";
import { ReviewAPI } from "../../api/ReviewAPI";


interface UseCommentAddFormProps {
    sendCommentHandler?: (newComment: ReviewTree) => void,
    movieKinopoiskId: number,
    parentId: number | undefined
}

export default function useCommentAddForm({sendCommentHandler, movieKinopoiskId, parentId }:UseCommentAddFormProps) {
    const [commentValue, setCommentValue] = useState("");

    const axios = useAxiosAuth();
    const createReview = async () => {
        try {
            const response = await ReviewAPI.createReview({ title: "", text: commentValue, filmId: movieKinopoiskId, parentId }, axios)
            sendCommentHandler && sendCommentHandler(response.data)
            setCommentValue("")
        }
        catch (error) {
            console.log(error)
        }
    }

    const updateCommentValue = (e: ChangeEvent<HTMLInputElement>) => {
        setCommentValue(e.target.value)
    }

    

    return {commentValue, updateCommentValue, createReview}
}