import React, { Component } from 'react';

export default class NewsPost extends Component {
    render() {
        return (
            <div className="news-item">
                <img src={this.props.img} alt=""/>
                <div className="news-item_title">{this.props.title}</div>

            </div>
        )
    }
}