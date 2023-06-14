export interface LinkData {
    name: string,
    link: string
}

export interface LinkDataWithDropdown extends LinkData {
    dropdown: boolean
}


export interface NavbarLinkData {
    country: LinkData[],
    genres: LinkData[],
    years: LinkData[],
    aside: LinkData[]
}
export interface NavbarLink {
    name: string,
    link: string,
    data: NavbarLinkData | null

}