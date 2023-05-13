import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import Image from "next/image";
import { getFilm } from "../../../../store/film";
import { IStaff } from "../../../../models";
import MyButton from "../../../UI/MyButton/MyButton";

const ActorsList = () => {
    const films = useSelector(getFilm());

    return (
        <>
            {films?.currentStaff?.slice(0, 4).map((actors: IStaff) => (
                <Link
                    key={actors?.person?.id}
                    href={"/person/" + String(actors?.person?.personId)}
                >
                    <div>
                        <MyButton type="footer" size="large">
                            <Image
                                src={actors?.person?.posterUrl || ""}
                                width={47}
                                height={47}
                                alt=""
                            />
                        </MyButton>
                        <p>{actors?.person?.nameRu}</p>
                    </div>
                </Link>
            ))}
        </>
    );
};

export default ActorsList;
