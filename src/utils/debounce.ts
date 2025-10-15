export function debounce<T extends (...args: Parameters<T>) => ReturnType<T>>(
    func: T,
    timeout = 300,
): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), timeout);
    };
}
