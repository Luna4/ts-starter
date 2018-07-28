import * as React from 'react';
import { UserStore } from '../stores/src/user-store';
import { UserList } from '../components/src/user-list/user-list';

const userStoreInstance = new UserStore();

export class UserListContainer extends React.Component<{}, {}> {
    render() {
        return (
            <UserList userStore={userStoreInstance} />
        );
    }
}