import React, { Component } from 'react';
import { Price } from './';

const baseURL = 'http://chistoda.local/api';

const loadPrice = () => {
    return fetch(`${baseURL}/price`)
        .then( res => res.json() )
};

export class Prices extends Component {
    state = {
        prices: []
    };

    componentDidMount() {
        loadPrice()
            .then( prices => this.setState({ prices }) )
    }

    render() {
        return (
            <div className="page-prices content-card flex-row">
                <div className="content-card__caption flex-column">
                    <span>ПРАЙС</span>
                </div>
                <div className="content-card__body flex-column">
                  {
                    this.state.prices.map(price => <Price {...price} key={price.id} />)
                  }
                </div>
            </div>
        );
    }
}
