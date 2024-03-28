export function minHours(mins: number | string) {
    let value: number;
    if (typeof mins === "string") {
        value = Number(mins)
    } else {
        value = mins
    }
    const hours = Math.trunc(value / 60);
    const minutes = value % 60;
    return { hours, minutes }
}