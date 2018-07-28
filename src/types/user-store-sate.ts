import { User } from './user';
export interface UserState {
    users: User[];
}

export const defaultUserState: UserState  = {
    users: []
};