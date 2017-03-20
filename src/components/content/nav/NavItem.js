import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavItem extends Component {
    render() {
        return (
            <NavLink activeClassName="active" to={this.props.link}>{this.props.title}</NavLink>
        )
    }
}