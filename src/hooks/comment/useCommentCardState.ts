import { useState } from "react";
import useAuth from "../auth/useAuth";

export default function useCommentCardState() {
    const [replyOpen, setReplyOpen] = useState(false);
    const [showChildComment, setShowChildComment] = useState(false);

    const auth = useAuth();
    const isLoginUser = Boolean(auth?.auth?.token)


    return {replyOpen, setReplyOpen, showChildComment, setShowChildComment, isLoginUser};
}