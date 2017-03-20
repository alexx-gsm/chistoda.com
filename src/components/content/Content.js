import React, { Component } from 'react';
import { Nav } from './nav/Nav';
import { NavVert } from './nav/Nav-vert';
import News from './news/News';

export default class Content extends Component {
    state = {
        isHome: true
    };

    render() {
        return (
            <div id="content" className="flex-row justify-content-between align-items-start">
                {this.state.isHome ? <Nav /> : <NavVert/>}
                <div id="main"></div>
                <News />
            </div>
        )
    }
}