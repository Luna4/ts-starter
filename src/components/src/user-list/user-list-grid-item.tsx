import * as React from 'react';
import { observer } from 'mobx-react';
import { User } from '../../../types/user';

export interface UserListGridItemProps  {
    user: User;
}

@observer
export class UserListGridItem extends React.Component<UserListGridItemProps> {
    render() {
        const { user} =  this.props;
        return (
            <tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
            </tr>
        );
    }
}