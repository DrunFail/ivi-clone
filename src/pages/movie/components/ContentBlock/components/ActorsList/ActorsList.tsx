import React from "react";
import { useSelector } from "react-redux";
import { getFilm } from "../../../../../../store/film";
import Link from "next/link";
import MyButton from "../../../../../../components/common/MyButton/MyButton";
import Image from "next/image";
import { IStaff } from "../../../../../../models";

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
