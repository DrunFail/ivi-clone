import { getTranslations } from "next-intl/server";
import { MovieAPI } from "../../../api/MovieAPI";
import RootLayout from "../../../components/RootLayout/RootLayout";
import { CLIENT_GENRE_LIST } from "../../../constants/genreList";
import { NAV_MENU } from "../../../constants/headerConstants";
import { NavbarLink } from "../../../models/global";
import { calculateGenreName } from "../../../utils/calculateGenreName";
import { getKeyByValue } from "../../../utils/getKeyByValue";
import { cookies } from "next/headers";
import useRefreshToken from "../../../hooks/auth/useRefreshToken";

async function getGenreListFromDB() {
    const genreListFromDB = await MovieAPI.getGenreList();
    return genreListFromDB;
}


async function getUserProfileDataFromDB(token:string){
    
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/profiles/me`, {
            method: "get",
            headers: {

                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            console.log("error fetch user data")
        }
        return response.json();
}

export default async function MovieLayout({ children, params: { locale } }: { children: React.ReactNode, params: { locale: "ru" | "en" } }) {
    const genreListFromDB = await getGenreListFromDB();
    const t = await getTranslations();

    const session = await cookies().get("session")?.value;
    let userProfileData;
    if (session) {
        userProfileData = await getUserProfileDataFromDB(session);
    }
    else {
        const refresh = await cookies().get("refreshToken")?.value;
        if (refresh) {
            //get new token
            console.log("need refresh")
        }
        
    }
    
    
   console.log(userProfileData)
    
    

    function translateCountryNavBlock(navBlock: NavbarLink) {
        return navBlock.data!.country.map(country => {
            return {
                ...country,
                name: t(`genre.${country.name}.short`)
            }
        })
    }

    function translateYearNavBlock(navBlock: NavbarLink) {
        return navBlock.data!.years.map(year => {
            return {
                ...year,
                name: t(`year.${navBlock.name}.${year.name}`)
            }
        })
    }
    function translateGenreNavBlock(navBlock: NavbarLink) {
       return navBlock.data!.genres.map(genre => {
            return {
                ...genre,
                name: t(`genre.${genre.name}.short`)
            }
        });
    }

    const getTranslateForNavBlock = (navBlock: NavbarLink) => {
        if (navBlock.name === "serials" || navBlock.name === "cartoons") {
            const translatedGenres = translateGenreNavBlock(navBlock);
            const translatedCountries = translateCountryNavBlock(navBlock);
            const translatedYears = translateYearNavBlock(navBlock);
            return {
                ...navBlock,
                data: {
                    ...navBlock.data,
                    genres: translatedGenres,
                    country: translatedCountries,
                    years: translatedYears
                }
            };
        }
        return navBlock;
    }



    const transformGenresForMovie = genreListFromDB.map(genre => {
        const name = calculateGenreName(genre, locale);
        const linke = getKeyByValue(CLIENT_GENRE_LIST, genre.id)
        const link = `/movies/${linke}`;
        return { name, link }
    })
    const sortedGenresForMovieByName = transformGenresForMovie.sort((a, b) => a.name.localeCompare(b.name));

    


    const transformedNav = NAV_MENU.map(navBlock => navBlock.name === "movies"
        ? {
            ...navBlock, data: {
                ...navBlock.data,
                genres: sortedGenresForMovieByName,
                country: translateCountryNavBlock(navBlock),
                years: translateYearNavBlock(navBlock)
            }
        }
        : getTranslateForNavBlock(navBlock)
    )


    return (
        <RootLayout navList={transformedNav as NavbarLink[]} userProfileData={userProfileData}>
            {children}
        </RootLayout>
    );
}