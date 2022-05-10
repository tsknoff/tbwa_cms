export interface IMedia{
    id: number;
    order: number;
    type: string;
    src: string;
}
export interface ILabelMoreWorks{
    label: string;
    src: string;
}
export interface IArticleContentProps{
    bodyTitle: string;
    bodyText: string;
    awardsTitle: string;
    awardsBody: string[];
    share: boolean;
    media?: IMedia[];
    labelMoreWorks?: ILabelMoreWorks;
}