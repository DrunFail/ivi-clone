import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function useMoviePageModal() {
    const [visible, setVisible] = useState(false);
    const router = useRouter();
    const type = router.query.type! as string
    const { id,  } = router.query;

    const pushQuery = async (type: string) => {
        await router.push({
            pathname: "/movie/" + String(id),
            query: { type }
        });
    };

    useEffect(() => {
        if (type) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [type]);

    const removeQueryParam = async () => {
        await router.push({
            pathname: "/movie/" + String(id)
        });
    };


    return {visible,  pushQuery,removeQueryParam, type}
}