import { NavbarLink } from "../models/global"

const GENRES = {
    action: "action",
    adult: "adult",
    adventures: "adventures",
    american:"american",
    anime: "anime",
    biography: "biography",
    comedy: "comedy",
    comical: "comical",
    crime: "crime",
    detective: "detective",
    documentary: "documentary",
    dorama:"dorama",
    drama: "drama",
    family: "family",
    fantastic: "fantastic",
    fantastical:"fantastical",
    fantasy: "fantasy",
    foreign:"foreign",
    full: "full",
    history: "history",
    historical: "historical",
    horror: "horror",
    kids: "kids",
    korean:"korean",
    learn: "learn",
    medicine: "medicine",
    melodrama:"melodrama",
    military: "military",
    musical: "musical",
    mystical: "mystical",
    romantic: "romantic",
    russian:"russian",
    serial: "serial",
    soviet:"soviet",
    sport: "sport",
    tvshow:"tvshow",
    thriller: "thriller",
    turkish:"turkish"
}


export const NAV_MENU: NavbarLink[] = [
    {
        name: "myIvi",
        link: "/",
        data: null
    },
    {
        name: "new",
        link: "https://www.ivi.ru/new",
        data: null
    },
    {
        name: "movies",
        link: "/movies/all",
        data: {
            genres: [
                { name: "Артхаус", link: "" },
                { name: "Боевики", link: "" },
                { name: "Вестерн", link: "" },
                { name: "Военные", link: "" },
                { name: "Детективы", link: "" },
                { name: "Для всей семьи", link: "" },
                { name: "Для детей", link: "" },
                { name: "Документальные", link: "" },
                { name: "Драмы", link: "" },
                { name: "Исторические", link: "" },
                { name: "Катастрофы", link: "" },
                { name: "Комедии", link: "" },
                { name: "Криминальные", link: "" },
                { name: "Мелодрамы", link: "" },
                { name: "Мистические", link: "" },
                { name: "По комиксам", link: "" },
                { name: "Приключения", link: "" },
                { name: "Спорт", link: "" },
                { name: "Триллеры", link: "" },
                { name: "Ужасы", link: "" },
                { name: "Фантастика", link: "" },
                { name: "Фэнтези", link: "" }
            ],
            country: [
                { name: GENRES.russian, link: "https://www.ivi.ru/movies/ru" },
                { name: GENRES.foreign, link: "https://www.ivi.ru/movies/foreign" },
                { name: GENRES.soviet, link: "https://www.ivi.ru/movies/su" }
            ],
            aside: [
                { name: "new", link: "https://www.ivi.ru/new/movie-new" },
                { name: "collections", link: "https://www.ivi.ru/collections" },
                { name: "rating", link: "https://www.ivi.ru/movies/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready" },
                { name: "soon", link: "https://www.ivi.ru/new/soon-ivi" },
                { name: "trailers", link: "https://www.ivi.ru/trailers" },
                { name: "recommendation", link: "https://www.ivi.ru/goodmovies" },
                { name: "hdMovies", link: "https://www.ivi.ru/collections/movies-hd" },
                { name: "choice", link: "https://www.ivi.ru/collections/vyibor-ivi" },
                { name: "newSubscription", link: "https://www.ivi.ru/collections/very-new-svod?sort=priority_in_collection" },
                { name: "amediaMovies", link: "https://www.ivi.ru/collections/filmyi-amediateka" },
                { name: "popularMovies", link: "https://www.ivi.ru/collections/best-movies" },
                { name: "iviMovies", link: "https://www.ivi.ru/collections/ivi-originals" }
            ],
            years: [
                { name: "movie.2023", link: "https://www.ivi.ru/movies/2023" },
                { name: "movie.2022", link: "https://www.ivi.ru/movies/2022" },
                { name: "movie.2021", link: "https://www.ivi.ru/movies/2021" },
                { name: "movie.2020", link: "https://www.ivi.ru/movies/2020" }
            ]
        }
    },
    {
        name: "serials",
        link: "https://www.ivi.ru/series",
        data: {
            genres: [
                { name: GENRES.biography, link: "https://www.ivi.ru/series/biography" },
                { name: GENRES.action, link: "https://www.ivi.ru/series/boeviki" },
                { name: GENRES.military, link: "https://www.ivi.ru/series/voennye" },
                { name: GENRES.detective, link: "https://www.ivi.ru/series/detective" },
                { name: GENRES.family, link: "https://www.ivi.ru/series/dlya_vsej_semi" },
                { name: GENRES.documentary, link: "https://www.ivi.ru/series/documentary" },
                { name: GENRES.dorama, link: "https://www.ivi.ru/series/doramy" },
                { name: GENRES.drama, link: "https://www.ivi.ru/series/dramy" },
                { name: GENRES.historical, link: "https://www.ivi.ru/series/history" },
                { name: GENRES.comical, link: "https://www.ivi.ru/series/comedy" },
                { name: GENRES.crime, link: "https://www.ivi.ru/series/crime" },
                { name: GENRES.medicine, link: "https://www.ivi.ru/series/medicine" },
                { name: GENRES.melodrama, link: "https://www.ivi.ru/series/melodramyi" },
                { name: GENRES.mystical, link: "https://www.ivi.ru/series/misticheskie" },
                { name: GENRES.adventures, link: "https://www.ivi.ru/series/adventures" },
                { name: GENRES.romantic, link: "https://www.ivi.ru/series/romanticheskie" },
                { name: GENRES.tvshow, link: "https://www.ivi.ru/series/tvshow" },
                { name: GENRES.thriller, link: "https://www.ivi.ru/series/thriller" },
                { name: GENRES.turkish, link: "https://www.ivi.ru/series/tr" },
                { name: GENRES.horror, link: "https://www.ivi.ru/series/horror" },
                { name: GENRES.fantastical, link: "https://www.ivi.ru/series/scifi" },
                { name: GENRES.fantasy, link: "https://www.ivi.ru/series/fantasy" }
            ],
            country: [
                { name: GENRES.russian, link: "https://www.ivi.ru/series/ru" },
                { name: GENRES.foreign, link: "https://www.ivi.ru/series/foreign" },
                { name: GENRES.american, link: "https://www.ivi.ru/series/us" },
                { name: GENRES.korean, link: "https://www.ivi.ru/series/kr" },
                { name: GENRES.turkish, link: "https://www.ivi.ru/series/tr" }
            ],
            aside: [
                { name: "new", link: "https://www.ivi.ru/new/series-new" },
                { name: "rating", link: "https://www.ivi.ru/series/all?ivi_rating_10_gte=7&sort=ivi&rating_part=main&rating_model=ready" },
                { name: "hdSerials", link: "https://www.ivi.ru/collections/series-hd" },
                { name: "freeSerials", link: "https://www.ivi.ru/collections/tvshow-free?sort=new" },
                { name: "amediaSerials", link: "https://www.ivi.ru/collections/serialyi-amediateka" },
                { name: "paramountSerials", link: "https://www.ivi.ru/collections/series-paramount-play" }
            ],
            years: [
                { name: "serial.2023", link: "https://www.ivi.ru/series/2023" },
                { name: "serial.2022", link: "https://www.ivi.ru/series/2022" },
                { name: "serial.2021", link: "https://www.ivi.ru/series/2021" },
                { name: "serial.2020", link: "https://www.ivi.ru/series/2020" }
            ]
        },
    },
    {
        name: "cartoons",
        link: "https://www.ivi.ru/animation",
        data: {
            genres: [
                { name: GENRES.anime, link: "https://www.ivi.ru/animation/anime" },
                { name: GENRES.action, link: "https://www.ivi.ru/animation/militants" },
                { name: GENRES.detective, link: "https://www.ivi.ru/animation/detective" },
                { name: GENRES.adult, link: "https://www.ivi.ru/animation/vzroslye" },
                { name: GENRES.family, link: "https://www.ivi.ru/animation/dlya_vsej_semi" },
                { name: GENRES.kids, link: "https://www.ivi.ru/animation/detskie" },
                { name: GENRES.drama, link: "https://www.ivi.ru/animation/drama" },
                { name: GENRES.history, link: "https://www.ivi.ru/animation/history" },
                { name: GENRES.comedy, link: "https://www.ivi.ru/animation/comedy" },
                { name: GENRES.crime, link: "https://www.ivi.ru/animation/crime" },
                { name: GENRES.musical, link: "https://www.ivi.ru/animation/musical" },
                { name: GENRES.full, link: "https://www.ivi.ru/animation/polnometrazhnye" },
                { name: GENRES.adventures, link: "https://www.ivi.ru/animation/adventure" },
                { name: GENRES.learn, link: "https://www.ivi.ru/animation/razvivayuschie" },
                { name: GENRES.serial, link: "https://www.ivi.ru/animation/serialy" },
                { name: GENRES.sport, link: "https://www.ivi.ru/animation/sport" },
                { name: GENRES.thriller, link: "https://www.ivi.ru/animation/thriller" },
                { name: GENRES.horror, link: "https://www.ivi.ru/animation/horror" },
                { name: GENRES.fantastic, link: "https://www.ivi.ru/animation/fantastic" },
                { name: GENRES.fantasy, link: "https://www.ivi.ru/animation/fantasy" }
            ],
            country: [
                { name: GENRES.soviet, link: "https://www.ivi.ru/animation/su" },
                { name: GENRES.russian, link: "https://www.ivi.ru/animation/ru" },
                { name: GENRES.american, link: "https://www.ivi.ru/animation/us" },
                { name: GENRES.foreign, link: "https://www.ivi.ru/animation/foreign" }

            ],
            aside: [
                { name: "new", link: "https://www.ivi.ru/new/animation-new" },
                { name: "hdCartoons", link: "https://www.ivi.ru/collections/cartoons-hd" },
                { name: "paramountCartoons", link: "https://www.ivi.ru/collections/animation-paramount-play" },
                { name: "dreamworksCartoons", link: "https://www.ivi.ru/collections/dreamworks-cartoons" },
                { name: "stsCartoons", link: "https://www.ivi.ru/collections/ctc-kids" }
            ],
            years: [
                { name: "cartoon.2023", link: "https://www.ivi.ru/animation/2023" },
                { name: "cartoon.2022", link: "https://www.ivi.ru/animation/2022" },
                { name: "cartoon.2021", link: "https://www.ivi.ru/animation/2021" },
                { name: "cartoon.2020", link: "https://www.ivi.ru/animation/2020" }
            ]
        },
    }
]
