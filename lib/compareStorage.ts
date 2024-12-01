import {getItem, setItem} from "@/lib/localStorage";

export const addCompareAppId = (id: string): void => {
    const storedIds = getItem<string[]>('componentIds', []);
    if (!storedIds.includes(id)) {
        storedIds.push(id);
        setItem('componentIds', storedIds);
    }
};

export const hasComponentId = (id: string): boolean => {
    const storedIds = getItem<string[]>('componentIds', []);

    return storedIds.includes(id)
}


export const getCompareAppIds = (): number[] => {
    const storedIds = getItem<string[]>('componentIds', []);

    return storedIds.map(id => Number(id))
}

export const removeCompareAppId = (id: string): void => {
    const storedIds = getItem<string[]>('componentIds', []);
    const updatedIds = storedIds.filter(storedId => storedId !== id);
    setItem('componentIds', updatedIds);
};

export const hasMoreThanTwoCompareApps = (): boolean => {
    const storedIds = getItem<string[]>('componentIds', []);
    return storedIds.length > 1;
};