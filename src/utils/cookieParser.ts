export function getCookie(cookieName: string) {
    const cookie = document.cookie
        .split(';')
        .find((elem) => elem.includes(cookieName))
        ?.split('=')[1];
    return cookie;
}

export const cookieParser = (cookieName: string): string | undefined => {
    const cookieValue = getCookie(cookieName);
    if (cookieValue) {
        return cookieValue;
    }
    return undefined;
};
