import { StaticImageData } from "next/image";

export interface SearchListDriveCourse {
    id: string;
    image: StaticImageData;
    title: string;
    routeLength: number;
    hashtag: string;
    region: string;
};

export interface HomeBannerModel {
    id: string;
    image: StaticImageData;
    title: string;
    button: string;
};
