export interface IWorkItem{
    id: number;
    preview: string;
    client: string;
    title: string;
    status: number;
    link: string;
}

export type IWorkItems = IWorkItem[];