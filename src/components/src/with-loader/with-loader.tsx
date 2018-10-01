import * as React from 'react';
import { Component } from 'react';

/**
 * HOC for loading indicator
 * Example
 * ```
 * export const DemoComponent = (props: DemoComponentProps) => {
 *      // retrieve hasData ...
 *      const DemoComponentWithLoader = WrapComponentWithLoader<DemoComponentProps, DemoComponentStates>(DemoComponentSkeleton, hasData)(DemoComponentInternal);
 *      return (<DemoComponentWithLoader {...props} />);
 * }
 * ```
 */

export const WrapComponentWithLoader = <P extends object, S extends object>(LoadingIndicator: React.SFC, hasData: boolean) =>
    (ActualComponent: React.ComponentType<P>) =>
        class Loader extends Component<P, S> {
            render() {
                return hasData
                    ? <ActualComponent {...this.props} />
                    : <LoadingIndicator />;
            }
        }