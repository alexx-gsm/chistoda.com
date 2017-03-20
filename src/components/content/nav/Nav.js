import React, { Component } from 'react';
import NavItem from './NavItem';
import menu from './menu.json';
import { Link } from './../../router';

export const Nav =() => (
    <div id="nav">
        <div className="nav_main-link flex-row">
            {
                menu.map(item => <NavItem key={item._id} {...item} />)
            }
        </div>
        <div className="nav_extra-link flex-row justify-content-around align-items-center">
            <Link to="/about">О компании</Link>
            <Link to="/done">Выполненные работы</Link>
            <Link to="/price">Скачать прайс</Link>
            <Link/>
        </div>

    </div>
);
