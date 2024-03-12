export function minHours(mins: number) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return {
        ru: String(hours) + " ч. " + String(minutes) + " мин.",
        en: String(hours) + " h. " + String(minutes) + " min."
    };
}
