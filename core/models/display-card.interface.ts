

export interface DisplayCardModel{
    title?: string;
    key: number;
    imageUrl?: string;
    subTitle: string;
    description: string[];
    linkUrl?: string;
    lineClamp?: boolean;
    cardProperties?: CardProperties;
    buttons: Buttons[];
}

export interface CardProperties{
    height?: number;
    elevation: number;
    backgroundColor?: string;
    border?: BorderProperties; 
}

export interface BorderProperties {
    borderWidth: string;
    borderStyle: string;
    borderColor: string;
}

export interface Buttons {
    name: string;
    variant: any;
    size?: any;
    backgroundColor?: string;
    hover?: string;
    linkUrl: string;
}