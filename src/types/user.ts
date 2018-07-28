type Gender = 'female' | 'male';
export interface User {
    _id: string;
    name: string;
    age: number;
    gender: Gender;
}