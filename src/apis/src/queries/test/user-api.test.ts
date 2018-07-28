import { userApi } from '../user-api';

describe('userApi', () => {
    it('fetche users by age and gender', async () => {
        const users = await userApi.getUsers('55', 'fanglan');
        expect(users).toBeTruthy();
    });
});