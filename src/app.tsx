import * as React from 'react';

export class App extends React.Component<{}, {}> {
    renderDevTool() {
        if (process.env.NODE_ENV !== 'production') {
            const DevTools = require('mobx-react-devtools').default;
            return <DevTools />;
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.props.children}
                {this.renderDevTool()}
            </React.Fragment>
        );
    }
}