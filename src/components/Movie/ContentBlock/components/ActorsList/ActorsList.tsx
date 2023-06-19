import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { getFilm } from "../../../../../store/film";
import MyButton from "../../../../UI/MyButton/MyButton";
import { IStaff } from "../../../../../models";

const ActorsList = () => {
    const films = useSelector(getFilm());
    console.log(films)
    return (
        <>
            {films?.staff?.slice(0, 4).map((actors: IStaff) => (
                <Link
                    key={actors?.id}
                    href={"/person/" + String(actors?.person?.personId)}
                >
                    <div>
                        <MyButton type="footer" size="large">
                            <Image
                                src={actors?.posterUrl || ""}
                                width={47}
                                height={47}
                                alt=""
                            />
                        </MyButton>
                        <p>{actors?.nameRu}</p>
                    </div>
                </Link>
            ))}
        </>
    );
};

export default ActorsList;
