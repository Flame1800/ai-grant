export interface Criteria {
    id: string | number;
    title: string;
    weight: number;
}

export interface Contest {
    id: number;
    title: string;
    subtitle: string;
    applicationsCount: number;
    nominationsCount: number;
    organiser: string;
}
