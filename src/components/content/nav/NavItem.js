import React, { Component } from 'react';

export default class NavItem extends Component {
    render() {
        return (
            <div className="nav_menu-item">
                <a href="#">{this.props.title}</a>
            </div>
        )
    }
}