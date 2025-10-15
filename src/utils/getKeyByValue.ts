export const getKeyByValue = (object: { [key: string]: unknown }, value: unknown): string | null => {
    const keys = Object.keys(object);
    const item = keys.find((key) => object[key] === value);
    if (!item) {
        console.log('dont get key by value');
        return null;
    }
    return item;
};
