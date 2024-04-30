import { useSearchParams,useRouter,useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function useMoviePageModal() {
    const [visible, setVisible] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams()!;
    const id = useParams<{ id: string }>()!.id;
    const type = searchParams.get("type")!;
    
    

    const pushQuery = async (type: string) => {
        await router.push(`/movie/${id}?type=${type}`);
    };

    useEffect(() => {
        if (type) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [type]);

    const removeQueryParam = async () => {
        await router.push(`/movie/${id}`);
    };


    return {visible,  pushQuery,removeQueryParam, type}
}