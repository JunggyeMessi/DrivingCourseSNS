import { StaticImageData } from "next/image";

interface HomeDriveCourseData {
    id: string;
    image: StaticImageData;
    title: string;
    difficulty: number;
    routeLength: number;
};

export default HomeDriveCourseData;