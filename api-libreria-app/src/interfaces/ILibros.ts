// Generated by https://quicktype.io

export interface ILibro {
    id: string;
    title: string;
    isbn: string;
    pageCount: number;
    publishedDate: string;
    thumbnailUrl: string;
    shortDescription?: string;
    longDescription?: string;
    status: string;
    precio: number;
}

export interface IColumn {
    key: string;
    label: string;
}

export const ColumnLibro:IColumn[]=[
    {
        key:"isbn",
        label:"ISBN",
    },
    {
        key:"title",
        label:"TITLE"
    },
    {
        key:"page",
        label:"PAGE"
    },
    {
        key:"precio",
        label:"PRECIO"
    },
    {
        key:"thumbnail",
        label:"Imagen"
    }
]

export default ColumnLibro;