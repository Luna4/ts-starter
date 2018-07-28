import * as React from 'react';

const headers: string[] = ['Name', 'Age', 'Gender'];

export const UserListGridHeader: React.SFC<{}> = () => {
    return (
        <thead>
            <tr>
                {headers.map(header => <th key={`user-list-grid-header-th-${header}`}>{header}</th>)}
            </tr>
        </thead>
    );
};