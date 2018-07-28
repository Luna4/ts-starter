import { UserStore } from '../user-store';
import { userApi } from '../../../apis/src/queries/user-api';

describe('user store', () => {
    let userStore: UserStore;

    beforeEach(() => {
        userStore = new UserStore();
    });

    it('can get users', () => {
        const getUsers = jest.spyOn(userApi, 'getUsers');
        userStore.fetchUsers('18', 'female');
        expect(getUsers).toBeCalledWith('18', 'female');
    });

    it('can get users by default parameters', () => {
        const getUsers = jest.spyOn(userApi, 'getUsers');
        userStore.fetchUsers();
        expect(getUsers).toBeCalledWith('', '');
    });

});