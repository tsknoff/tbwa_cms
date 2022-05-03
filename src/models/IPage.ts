export interface IPage {
    id: number;
    type: string;
    preview?: string;
    title: string;
    client?: string;
    url?: string;
    lang?: string;
    active?: boolean;
}