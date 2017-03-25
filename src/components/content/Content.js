import React, { Component } from 'react';
import { Nav } from './nav/Nav';
import { NavVert } from './nav/Nav-vert';
import Main from './pages/Main';
import News from './news/News';

export default class Content extends Component {
    state = {
        isHome: this.props.isHome || false
    };

    render() {
        const Card = () => (
            <div id="main" className="h-100">
                <Main route={this.props.route} />
            </div>
        );

        return (
            <div id="content" className="flex-row justify-content-between align-items-start">
                {this.state.isHome ? <Nav /> : <NavVert/>}
                {this.state.isHome ?      '' : <Card />}

                <News />
            </div>
        )
    }
}