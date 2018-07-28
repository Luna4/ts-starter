import * as React from 'react';
import { observer } from 'mobx-react';
import { UserListGrid } from './user-list-grid';
import { UserListFilter } from './user-list-filter';
import { UserStore } from '../../../stores/src/user-store';
import './scss/user-list.scss';

export interface UserListProps {
    userStore: UserStore;
}

@observer
export class UserList extends React.Component<UserListProps> {
    render() {
        return (
            <React.Fragment>
                <UserListFilter fetchUsers={this.props.userStore.fetchUsers}/>
                <UserListGrid  {...this.props} />
            </React.Fragment>
        );
    }

    componentDidMount() {
        this.props.userStore.fetchUsers();
    }
}