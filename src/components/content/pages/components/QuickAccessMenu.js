import React from 'react';
import { NavLink } from 'react-router-dom';
import menu from './../../nav/menu.json';
import menuExtra from './../../nav/menu-extra.json';

const QuickAccessMenu = () => {
    let quickMenu = {};
    menu.map(     item => quickMenu[item.alias] = item.link);
    menuExtra.map(item => quickMenu[item.alias] = item.link);

    return (
        <div className="quick-access">
            <ul className="quick-access__list">
                <li><NavLink to={quickMenu.price}>ПРАЙС</NavLink></li>
                <li><NavLink to={quickMenu.feedbacks}>ОТЗЫВЫ</NavLink></li>
                <li><NavLink to={quickMenu['foto-gallery']}>ФОТО ГАЛЕРЕЯ</NavLink></li>
                <li><NavLink to={quickMenu.contacts}>КОНТАКТЫ</NavLink></li>
            </ul>
        </div>
    )
};


export default QuickAccessMenu
