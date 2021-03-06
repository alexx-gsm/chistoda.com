import React, { Component } from 'react';
import {
    Services, Catalog, FeedBacks, Blog,
    Contacts, About, Prices, FotoGallery
} from './';


export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            route: this.props.route
        }
    };

    handleContent = () => {
        switch (this.state.route) {
            case 'services':
                return <Services/>;
            case 'foto-gallery':
                return <FotoGallery/>;
            case 'catalog':
                return <Catalog/>;
            case 'feedbacks':
                return <FeedBacks/>;
            case 'blog':
                return <Blog/>;
            case 'about':
              return <About/>;
            case 'contacts':
                return <Contacts/>;
            case 'prices':
                return <Prices/>;
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