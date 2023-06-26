import { useSelector } from "react-redux";
import Image from "next/image";
import { getFilm } from "../../../store/film";
import Trailer from "../../../store/trailer";

export default function TrailerTab() {
    const films = useSelector(getFilm());

    if (!films?.film?.trailers?.length) {
        return <></>;
    }

    return (
        <>
            {films?.film?.trailers?.map((trailer) => (
                <Trailer
                    trailer={trailer.url}
                    content={
                        <div>
                            <Image
                                src={films?.film?.logoUrl || ""}
                                width={288}
                                height={166}
                                alt=""
                            />
                            <p>{trailer?.name}</p>
                        </div>
                    }
                />
            ))}
        </>
    );
};


