import { BaseStore } from './base-store';
import { userApi } from '../../apis/src/queries/user-api';
import { UserState, defaultUserState } from '../../types/user-store-sate';
import { User } from '../../types/user';

/**
 * User store Class
 */
export class UserStore extends BaseStore<UserState> {

    constructor() {
        super(defaultUserState);
    }

    /**
     * Fetch user list data through user api and update store state
     */
    public fetchUsers = async (age: string = '', gender: string = ''): Promise<void> => {
        let users: User[];
        try {
            users = await userApi.getUsers(age, gender);
        } catch (error) {
            users = [];
            // log error that maps with the backend api error code.
        }
        this.setData({ users });
    }
}

// create store instance with default values
const store = new UserStore();
// export instance as default
// tslint:disable-next-line:no-default-export
export default store;