import React, { Component } from 'react';

import PhoneInfo from './Phone-info'

export default class PhoneMe extends Component {
    render() {
        return (
            <div id="header-phone" className="flex-column justify-content-start align-items-center">
                <PhoneInfo/>
                <span className="number">+7 800-222-29-23</span>
                <em className="free-call">по России звонок <b>бесплатный!</b></em>
                <div className="callback">
                    <span><a href="#">Оставить заявку</a></span>
                    <span className="divisor">|</span>
                    <span><a href="#">Обратный звонок</a></span>
                </div>
            </div>
        )
    }
}