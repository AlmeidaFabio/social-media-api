export type Image = {
    id: string;
    originalName: string;
    fileName: string;
    url: string;
    userId: string;
}

export type Photos = {
    photos: Image[];
}