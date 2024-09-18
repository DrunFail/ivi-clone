"use client"

import { useCallback, useEffect, useRef } from "react";
import { ResponseWithCountAndRows } from "../../../models/response";
import { Movie } from "../../../models/types";
import MovieListCardWithOverlayContainer from "../../Movie/MovieListCardContainer/MovieListCardWithOverlayContainer";
import MovieSliderSizeContainer from "../../Movie/MovieSliderSizeContainer/MovieSliderSizeContainer";
import ButtonShowMore from "../../UI/Carousel/ButtonShowMore/ButtonShowMore";
import { useFormState } from "react-dom";
import { getKeyByValue } from "../../../utils/getKeyByValue";
import { CLIENT_GENRE_LIST } from "../../../constants/genreList";
import { useRouter } from "../../../navigation";
import { debounce } from "../../../utils/debounce";
import { formFieldAction } from "../../../hooks/filters/formFieldAction";

interface Props {
    firstLoadMoviesByGenre: ResponseWithCountAndRows<Movie>,
    children: React.ReactNode
}

export default function FiltersFieldWithFilteredMoviesContainer({ firstLoadMoviesByGenre, children }: Props) {
    const [state, action] = useFormState(formFieldAction, { movie: firstLoadMoviesByGenre, isShowChangePageButton: true });
    const listRef = useRef<HTMLDivElement>(null);
    const router = useRouter();


    useEffect(() => {
        //get "--amount" property from css and set value for input[name=size]
        if (listRef.current) {
            const amount = getComputedStyle(listRef.current).getPropertyValue('--amount')
            const inputSize = document.querySelector('input[name=size]') as HTMLInputElement;
            const currentSize = +amount * 3
            inputSize.value = currentSize.toString();
        }
    }, [])

    useEffect(() => {
        const resetButton = document.querySelector('button[type=reset]') as HTMLButtonElement;
        const redirect = () => router.push('/movies/all');
        resetButton.addEventListener('click', redirect);
        return () => resetButton.removeEventListener('click', redirect);
    }, [router])

    useEffect(() => {
        const button = document.getElementById('load-more');
        const amountContainer = document.getElementById('get-amount') as HTMLDivElement;

        const input = document.querySelector('input[name=page]') as HTMLInputElement;
        if (button) {
            button.addEventListener('click', () => {
                input.stepUp(1);
                input.dispatchEvent(new Event('change', { bubbles: true }));
                amountContainer.style.gridAutoRows = "auto";
            })
        }
    }, [])

    const submitForm = useCallback(() => {
        const button = document.querySelector('button[type=submit]') as HTMLFormElement;
        button.click();
        console.log("func")
    }, [])

    const debouncedSubmit = debounce(() => submitForm());

    const formChangeHandler = useCallback((e: any) => {
        console.log(e)
        //if set new genre => redirect to genre page
        if (e.target.name === "genreId") {
            const selectedGenreLink = getKeyByValue(CLIENT_GENRE_LIST, +e.target.value);
            router.push(`/movies/${selectedGenreLink}`)
        }
        //if set new country => set current page value = 0
        if (e.target.name === "countryId") {
            const input = document.querySelector('input[name=page]') as HTMLInputElement;
            input.value = "0";
        }
        if (e.target.type === "range") {
            debouncedSubmit()
        }
        else {
            submitForm();
        }
    }, [debouncedSubmit, router, submitForm])

    return (
        <>

            <form name="test" id="form" action={action} onChange={(e) => formChangeHandler(e)} noValidate>
                {children}
                <button type="submit" />
            </form>


            {state?.movie.count

                ? <>
                    <MovieSliderSizeContainer>
                        <div
                            ref={listRef}
                            id={"get-amount"}
                            style={{ display: "grid", gridTemplateColumns: "repeat(var(--amount), 1fr)", gridTemplateRows: "repeat(3, 1fr)", gridAutoRows: "0", overflowY: "hidden" }}
                        >
                            {state.movie.rows.map(movie =>
                                <MovieListCardWithOverlayContainer
                                    key={movie.id}
                                    elem={movie}
                                />
                            )}
                        </div>
                    </MovieSliderSizeContainer>

                    {state.isShowChangePageButton && <ButtonShowMore id="load-more" />}
                </>
                : <p>no movie</p>
            }


        </>
    );
}