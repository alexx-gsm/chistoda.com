import React from 'react';

export default (Original) => class handleTabsDecorator extends React.Component {
    state = {
        activeTabId: 1
    };

    setActiveTab = id => () => this.setState({
        activeTabId: id
    });

    render() {
        return <Original
            {...this.props}
            activeTabId = {this.state.activeTabId}
            setActiveTab = {this.setActiveTab}
        />
    }
}