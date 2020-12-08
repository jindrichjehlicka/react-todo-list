export interface TodoItem {
    id: number | string,
    text: string;
    createdAt: string;
    finished?: boolean;
}
