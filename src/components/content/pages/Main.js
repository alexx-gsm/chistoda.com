import React, { Component } from 'react';
import {
    Services, Catalog, FeedBacks, Blog,
    Contacts, About, Prices, FotoGallery
} from './';

import menu from './../nav/menu.json';
import menuExtra from './../nav/menu-extra.json';

export default class Main extends Component {
    constructor(props) {
        super(props);

        let quickMenu = {};
        menu.map(item       => quickMenu[item.alias] = item.link);
        menuExtra.map(item  => quickMenu[item.alias] = item.link);
        this.state = {
            route: this.props.route,
            quickMenu: quickMenu
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
              return <About {...this.state.quickMenu}/>;
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