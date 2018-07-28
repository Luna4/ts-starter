import * as React from 'react';
import { observer } from 'mobx-react';
import { UserStore } from '../../../stores/src/user-store';
import { UserListGridItem } from './user-list-grid-item';
import { UserListGridHeader } from './user-list-grid-header';

export interface UserListGridProps {
    userStore: UserStore;
}

@observer
export class UserListGrid extends React.Component<UserListGridProps> {
    render() {
        const { users } = this.props.userStore.data;
        return (
            <table className="p-user-list__grid">
                <UserListGridHeader />
                <tbody>
                    {users.map(user => <UserListGridItem user={user} key={user._id} />)}
                    {users.length === 0 && (<tr><td colSpan={3}>No data....</td></tr>)}
                </tbody>
            </table>
        );
    }
}