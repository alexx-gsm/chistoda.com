import React from 'react';
import { NavLink } from 'react-router-dom';

export const PhoneInfoExtra = ({handleClose}) => (
    <div className="phone-popup">
        <p className="phone-popup__header">EXTRA INFO</p>
        <div className="phone-popup__title">Телефоны:</div>
        <ul className="phone-popup__list">
            <li className="phone-popup__item">+7 (3852) <span className="phone-popup__number">56-77-46</span>
                                           <span className="phone-popup__person">Инна</span>
            </li>
            <li className="phone-popup__item">+7 <span className="phone-popup__number">929-395-10-95</span>
                <span className="phone-popup__person">Марина</span>
            </li>
        </ul>
        <hr/>
        <p className="phone-popup__message">Есть вопросы? <em>Звоните!</em></p>
        <p className="phone-popup__message">Будем рады Вам помочь!</p>
        <div className="popup-buttons">
            <NavLink to="/contacts" onClick={handleClose}>Контакты</NavLink>
            <a onClick={handleClose}>Закрыть</a>
        </div>
    </div>
);
