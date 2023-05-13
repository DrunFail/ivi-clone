import Link from "next/link";
import React from "react";

/** Компонент cписка фильмов. */
const FakeHeader = (): React.ReactElement => {
    return (
        <header>
            <nav className="fakeNavbar">
                <Link
                    href={"/"}
                >Главная</Link>
                <Link
                    href={"/movies/all/"}
                >Список фильмов</Link>
                <Link
                    href={"/movie/"}
                >Страница фильма</Link>
                <Link
                    href={"/person/"}
                >Страница актёра</Link>
                <Link
                    href={"/admin/"}
                >Страница администратора</Link>
            </nav>
        </header>
    );
};

export default FakeHeader;
