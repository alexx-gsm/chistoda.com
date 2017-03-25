import React, { Component } from 'react';
import { Services, Catalog, FeedBacks, Blog, Contacts } from './';

export default class Main extends Component {
    state = {
        route: this.props.route
    };

    handleContent = () => {
        switch (this.state.route) {
            case 'services':
                return <Services/>;
            case 'catalog':
                return <Catalog/>;
            case 'feedbacks':
                return <FeedBacks/>;
            case 'blog':
                return <Blog/>;
            case 'contacts':
                return <Contacts/>;
            default:
                return this.state.route;
        }
    };

    render() {
        return (
            <div id="content-wrapper" className="h-100">
                {this.handleContent()}
            </div>
        )
    }
}