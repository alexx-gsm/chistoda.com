import React, { Component } from 'react';

const baseURL = 'http://api.chistoda.loc/api';

const loadPrice = () => {
    return fetch(`${baseURL}/price`)
        .then( res => res.json() )
};

export class Price extends Component {
    state = {
        price: {}
    };

    componentDidMount() {
        loadPrice()
            .then(price => {
                console.log(price);
                this.setState( {price} )
            })
    }

    render() {
        return (
            <div className="content-card flex-row">
                <div className="content-card__caption flex-column">
                    <span>Прайс</span>
                </div>
                <div className="content-card__body flex-column">
                    <div className="price-download">
                        <h2>Прайс</h2>
                        <button type="button" className="btn btn-outline-danger">Скачать</button>
                    </div>
                </div>
            </div>
        );
    }
}
