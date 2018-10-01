import * as React from 'react';
import { observer } from 'mobx-react';
import { UserListGrid } from './user-list-grid';
import { UserListFilter } from './user-list-filter';
import { UserStore } from '../../../stores/src/user-store';
import './scss/user-list.scss';
import { WrapComponentWithLoader } from '../with-loader/with-loader';
import { UserListSkeleton } from './user-list-skeleton';

export interface UserListProps {
    userStore: UserStore;
}

@observer
export class UserListInternal extends React.Component<UserListProps> {
    render() {
        return (
            <section className="p-main">
                <UserListFilter fetchUsers={this.props.userStore.fetchUsers}/>
                <UserListGrid  {...this.props} />
            </section>
        );
    }

    async componentDidMount (): Promise<void> {
        await this.props.userStore.fetchUsers();
    }
}

export const UserList = (props: UserListProps) => {
    // has data logic TODO ...
    
    const hasData = true;
    const UserListWithLoader = WrapComponentWithLoader<UserListProps, {}>(UserListSkeleton, hasData)(UserListInternal);
    return (<UserListWithLoader {...props} />);
};