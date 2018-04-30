import * as React from "react";
import FetchAPI from "./../common/fetch-helper";

export interface HelloProps { compiler: string; framework: string; }

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    componentDidMount() {
        FetchAPI('/api/users/test')
        // .then(response => response.json())
        .then(data => { console.log('data', data) })
        .catch(err => console.log('err', err))
    }
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
