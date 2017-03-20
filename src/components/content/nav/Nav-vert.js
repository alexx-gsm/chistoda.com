import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import NavItem from './NavItem';
import menu from './menu.json';
import menuExtra from './menu-extra.json';


export const NavVert =() => (
    <div id="nav-vert">
        <div className="nav-vert_separator"></div>
        <NavLink exact to="/">HOME</NavLink>
        <div className="nav_main-link flex-column">
            {
                menu.map(item => <NavItem key={item._id} {...item} />)
            }
        </div>
        <div className="nav_extra-link flex-column justify-content-start align-items-start">
            {
                menuExtra.map(item => <NavItem key={item._id} {...item} />)
            }
        </div>
        <div className="nav-vert_separator"></div>
    </div>
);
