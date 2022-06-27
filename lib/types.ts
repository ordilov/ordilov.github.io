export interface PostMetaData {
    title?: string;
    description?: string;
    imgName?: string;
    date?: string;
    tags: string[];
    category?: string;
    keywords?: string[];
    id: string;
}

export enum CategoryType {
    SPRING = 'spring',
    JAVA = 'java',
    BLOG = 'blog',
    DEV = 'dev',
    WEB = 'web',
    DATABASE = 'database'
}

export const CATEGORY_VALUES =
    Object.values(CategoryType);