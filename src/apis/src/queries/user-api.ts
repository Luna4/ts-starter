import { fetcher, serializeObjectToParamString } from '../api-helpers/fetcher';
import { User } from '../../../types/user';

export const userApi = {
    getUsers: (age: string, gender: string): Promise<User[]> => {
        const queryParamString =  serializeObjectToParamString({ age, gender });
        return fetcher<User[]>(`/api/users?${queryParamString}`);
    }
};