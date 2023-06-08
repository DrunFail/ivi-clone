export interface HeaderDropdownList {
    name: string,
    link: string,
    dropdown: boolean,
    genres: {name: string}[],
    country: { name: string }[],
    aside: { name: string }[],
    years: {name: string}[]

}
