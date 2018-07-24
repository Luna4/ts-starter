import * as React from 'react';
import { fecher } from '../api/utils/fetcher';
import './hello.scss';

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    componentDidMount() {
        // TODO  move to api folder
        fecher('/api/users/')
            .then(data => { console.log('data', data); })
            .catch(err => console.log('err', err));
    }
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}