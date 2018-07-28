export const flatten = <T>(array: (T | T[])[]): T[] => {
    const flattened: T[] = [];
    for (const element of array) {
        if (Array.isArray(element)) {
            flattened.push(...element);
        } else {
            flattened.push(element);
        }

    }
    return flattened;
};

export const isFlat = <T>(array: (T | T[])[]): array is T[] => {
    return !array.some(Array.isArray);
};
