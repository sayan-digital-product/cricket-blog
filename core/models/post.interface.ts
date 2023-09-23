import { SeoModel } from "./seo.interface";

export interface PostModel {
    id: string;
    name: string;
    title: string;
    date: string;
    contentHtml: string;
    imageUrl: string;
    author: string;
    description: string;
    keywords: string[];
    url: string;
    image: string;
}