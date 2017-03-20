import React, { Component } from 'react';
import FaBars from 'react-icons/lib/fa/bars';
import FaUser from 'react-icons/lib/fa/user';
import FaUserPlus from 'react-icons/lib/fa/user-plus';

export default class ToolMenu extends Component {
    render() {
        return (
            <div id="tool-menu" className="flex-row justify-content-end align-items-center">
                <a href="#" className="icon-menu-item">
                    <FaUserPlus size={28} />
                    <span>Регистрация</span>
                </a>
                <a href="#" className="icon-menu-item">
                    <FaUser size={28} />
                    <span>Войти</span>
                </a>
                <a href="#" className="icon-menu"><FaBars size={32} /></a>
            </div>
        )
    }

}