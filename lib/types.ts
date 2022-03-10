export interface PostMetaData {
    metadata: {
        title?: string;
        description?: string;
        imgName?: string;
        date?: string;
        tags: string[];
        category?: string;
        keywords?: string[];
        id: string;
    },
    content: string
}