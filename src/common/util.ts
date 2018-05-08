const flatten = <T>(array: (T | T[])[]): T[] => {
    const flattened: T[] = [];
    for (const element of array) {
        if (Array.isArray(element)) {
            flattened.push(...element)
        } else {
            flattened.push(element);
        }

    }
    return flattened;
};

const isFlat = <T>(array: (T | T[])[]): array is T[] => {
    return !array.some(Array.isArray);
};

const obj: { [key: string]: any } = {
    foo: 1,
    category: 'Standard'
}
obj.vouchers = [];

const array = [1, 2, 4, [3, 5], [6, 7, 8]];
const flattened = flatten(array);
console.log(flattened);
