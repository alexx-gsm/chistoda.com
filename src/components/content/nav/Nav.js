import React, { Component } from 'react';
import NavItem from './NavItem';
import menu from './menu.json';
import menuExtra from './menu-extra.json';

export const Nav =() => (
    <div id="nav">
        <div className="nav_menu-link flex-row">
            {
                menu.map(item => <NavItem key={item._id} {...item} />)
            }
        </div>
        <div className="nav_extra-link flex-row justify-content-around align-items-center">
            {
                menuExtra.map(item => <NavItem key={item._id} {...item} />)
            }
        </div>

    </div>
);
