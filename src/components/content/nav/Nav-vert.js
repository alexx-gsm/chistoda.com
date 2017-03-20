import React, { Component } from 'react';
import NavItem from './NavItem';
import menu from './menu.json';


export const NavVert =() => (
    <div id="nav-vert">
        <div className="nav_main-link flex-column">
            {
                menu.map(item => <NavItem key={item._id} {...item} />)
            }
        </div>
        <div className="nav_extra-link flex-column justify-content-start align-items-start">
            <a href="#">О комxxxxxxxxxпании</a>
            <a href="#">Выполненные работы</a>
            <a href="#">Скачать прайс</a>
        </div>

    </div>
);
