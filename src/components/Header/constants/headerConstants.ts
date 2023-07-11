import { NavbarLink } from "../../../models/global";
import { TWindowFilm } from "../components/WindowFilm/models/IWindow";

export const NAV_MENU:NavbarLink[] = [
    {
        name: "myIvi",
        link: "/",
        data:null
    },
    {
        name: "new",
        link: "https://www.ivi.ru/new",
        data:null
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
                { name: "русские", link: "" },
                { name: "зарубежные", link: "" },
                { name: "советское кино", link: "" }
            ],
            aside: [
                { name: "новинки", link: "" },
                { name: "подборки", link: "" },
                { name: "иви.рейтинг", link: "" },
                { name: "скоро на иви", link: "" },
                { name: "трейлеры", link: "" },
                { name: "что посмотреть", link: "" },
                { name: "фильмы в hd", link: "" },
                { name: "выбор иви", link: "" },
                { name: "новинки подписки", link: "" },
                { name: "фильмы амедиатеки", link: "" },
                { name: "популярные фильмы", link: "" },
                { name: "фильмы иви", link: "" }
            ],
            years: [
                { name: "фильмы 2023 года", link: "" },
                { name: "фильмы 2022 года", link: "" },
                { name: "фильмы 2021 года", link: "" },
                { name: "фильмы 2020 года", link: "" }
            ]
        }
        
        
    },
    {
        name: "serials",
        link: "https://www.ivi.ru/series",
        data: {
            genres: [
                { name: "Биография", link: "" },
                { name: "Боевики", link: "" },
                { name: "Военные", link: "" },
                { name: "Детективы", link: "" },
                { name: "Для всей семьи", link: "" },
                { name: "Документальные", link: "" },
                { name: "Дорамы", link: "" },
                { name: "Драмы", link: "" },
                { name: "Исторические", link: "" },
                { name: "Комедийные", link: "" },
                { name: "Криминальные", link: "" },
                { name: "Медицинские", link: "" },
                { name: "Мелодрамы", link: "" },
                { name: "Мистические", link: "" },
                { name: "Приключения", link: "" },
                { name: "Романтические", link: "" },
                { name: "Телешоу", link: "" },
                { name: "Триллеры", link: "" },
                { name: "Турецкие", link: "" },
                { name: "Ужасы", link: "" },
                { name: "Фантастические", link: "" },
                { name: "Фэнтези", link: "" }
            ],
            country: [
                { name: "русские", link: "" },
                { name: "зарубежные", link: "" },
                { name: "американские", link: "" },
                { name: "корейские", link: "" },
                { name: "турецкие", link: "" }
            ],
            aside: [
                { name: "новинки", link: "" },
                { name: "иви.рейтинг", link: "" },
                { name: "сериалы в hd", link: "" },
                { name: "бесплатные сериалы", link: "" },
                { name: "сериалы амедиатеки", link: "" },
                { name: "сериалы Paramount Play", link: "" }
            ],
            years: [
                { name: "сериалы 2023 года", link: "" },
                { name: "сериалы 2022 года", link: "" },
                { name: "сериалы 2021 года", link: "" },
                { name: "сериалы 2020 года", link: "" }
            ]

        },
       

    },
    {
        name: "cartoons",
        link: "https://www.ivi.ru/animation",
        data: {
            genres: [
                { name: "Аниме", link: "" },
                { name: "Боевик", link: "" },
                { name: "Детектив", link: "" },
                { name: "Для взрослых", link: "" },
                { name: "Для всей семьи", link: "" },
                { name: "Для детей", link: "" },
                { name: "Драма", link: "" },
                { name: "История", link: "" },
                { name: "Комедия", link: "" },
                { name: "Криминальные", link: "" },
                { name: "Мюзикл", link: "" },
                { name: "Полнометражные", link: "" },
                { name: "Приключения", link: "" },
                { name: "Развивающие", link: "" },
                { name: "Сериалы", link: "" },
                { name: "Спорт", link: "" },
                { name: "Триллер", link: "" },
                { name: "Ужасы", link: "" },
                { name: "Фантастика", link: "" },
                { name: "Фэнтези", link: "" }
            ],
            country: [
                { name: "советские", link: "" },
                { name: "русские", link: "" },
                { name: "американские", link: "" },
                { name: "зарубежные", link: "" }

            ],
            aside: [
                { name: "новинки", link: "" },
                { name: "мультики в hd", link: "" },
                { name: "мультфильмы Paramount Play/ Nickelodeon", link: "" },
                { name: "мультфильмы Dreamwoks", link: "" },
                { name: "мультфильмы СТС Kids", link: "" }
            ],
            years: [
                { name: "мультики 2023 года", link: "" },
                { name: "мультики 2022 года", link: "" },
                { name: "мультики 2021 года", link: "" },
                { name: "мультики 2020 года", link: "" }
            ]

        },
        
    }
]



export const zhanr: TWindowFilm[] = [
    {
        id: 1,
        name: "Артхаус"
    },
    {
        id: 2,
        name: "Боевики"
    },
    {
        id: 4,
        name: "Вестерн"
    },
    {
        id: 5,
        name: "Военные"
    },
    {
        id: 6,
        name: "Для всей семьи"
    },
    {
        id: 7,
        name: "Для детей"
    },
    {
        id: 8,
        name: "Документальные"
    },
    {
        id: 9,
        name: "Драмы"
    },
    {
        id: 10,
        name: "Исторические"
    },
    {
        id: 11,
        name: "Катастрофы"
    },
    {
        id: 12,
        name: "Артхаус"
    },
    {
        id: 13,
        name: "Боевики"
    },
    {
        id: 14,
        name: "Вестерн"
    },
    {
        id: 15,
        name: "Военные"
    },
    {
        id: 16,
        name: "Для всей семьи"
    },
    {
        id: 17,
        name: "Для детей"
    },
    {
        id: 18,
        name: "Документальные"
    },
    {
        id: 19,
        name: "Драмы"
    },
    {
        id: 20,
        name: "Исторические"
    },
    {
        id: 21,
        name: "Катастрофы"
    }
];

export const zhanrEn: TWindowFilm[] = [
    {
        id: 1,
        name: "Arthouse"
    },
    {
        id: 2,
        name: "Militants"
    },
    {
        id: 4,
        name: "Western"
    },
    {
        id: 5,
        name: "Military"
    },
    {
        id: 6,
        name: "For the whole family"
    },
    {
        id: 7,
        name: "For children"
    },
    {
        id: 8,
        name: "Documentaries"
    },
    {
        id: 9,
        name: "Drama"
    },
    {
        id: 10,
        name: "Historical"
    },
    {
        id: 11,
        name: "Catastrophes"
    }
];

export const country = [
    {
        id: 1,
        name: "Россия"
    },
    {
        id: 2,
        name: "США"
    },
    {
        id: 3,
        name: "Аргентина"
    }
];

export const countryEn = [
    {
        id: 1,
        name: "Russia"
    },
    {
        id: 2,
        name: "USA"
    },
    {
        id: 3,
        name: "Argentina"
    }
];

export const year = [
    {
        id: 1,
        name: "2000"
    },
    {
        id: 2,
        name: "2004"
    },
    {
        id: 3,
        name: "2000"
    }
];
