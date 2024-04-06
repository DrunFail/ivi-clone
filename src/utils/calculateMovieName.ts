export const calculateMovieName = (movieItem: { nameRu: string, nameOriginal: string | null }, lang: string) => {
    if (lang.toLowerCase() === "ru") return movieItem.nameRu
    return movieItem.nameOriginal ?? movieItem.nameRu
}