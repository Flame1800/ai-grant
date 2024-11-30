import { Contest, Criteria } from "@/components/Сontests/model";

export const mockContests: Contest[] = [
    {
        id: 1,
        title: "Гроссмейстеры завтрашнего дня ",
        subtitle: "Развитие институтов гражданского общества города Когалыма",
        applicationsCount: 1,
        nominationsCount: 1,
        organiser: "organiser",
    },
    {
        id: 2,
        title: "Гроссмейстеры завтрашнего дня ",
        subtitle: "Развитие институтов гражданского общества города Когалыма",
        applicationsCount: 1,
        nominationsCount: 1,
        organiser: "organiser",
    },
    {
        id: 3,
        title: "Гроссмейстеры завтрашнего дня ",
        subtitle: "Развитие институтов гражданского общества города Когалыма",
        applicationsCount: 1,
        nominationsCount: 1,
        organiser: "organiser",
    },
];

export const mockCriteria: Criteria[] = [
    {
        id: 1,
        title: "Значение",
        weight: 3,
    },
    {
        id: 2,
        title: "Актуальность",
        weight: 1.4,
    },
    {
        id: 3,
        title: "Правильность",
        weight: 1,
    },
];
