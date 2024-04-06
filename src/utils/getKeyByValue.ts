export const getKeyByValue = (object: { [key: string]: unknown }, value: unknown) => {
    const keys = Object.keys(object);
    const item = keys.find(key => object[key] === value)
    if (!item) throw new Error("dont get key by value")
    return item
}