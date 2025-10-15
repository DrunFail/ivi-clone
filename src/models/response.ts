export type ResponseWithCountAndRows<T> = {
    count: number;
    rows: T[];
};
