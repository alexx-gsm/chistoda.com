import React, { Component } from 'react';
import NewsPost from './NewsPost';
import FaAngleDown from 'react-icons/lib/fa/angle-down';
import FaAngleUp from 'react-icons/lib/fa/angle-up';
import news from './news.json';


export default class News extends Component {

    state = {
        isOpen: true
    };

    handleClose = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: false
        })
    };
    handleOpen = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: true
        })
    };

    render() {
        return (
            <div id="news" className="flex-column justify-content-end">
                {this.state.isOpen ? (
                    <div className="news-block">
                        <div className="news-block_title padding-bottom-15">
                            <span>НОВОСТИ</span>
                            <FaAngleDown onClick={this.handleClose} className="icon-news"/>
                        </div>
                        {news.map(item => <NewsPost key={item._id} {...item} />)}
                    </div>
                    ) : (
                        <div className="news-block">
                            <div className="news-block_title">
                                <span>НОВОСТИ</span>
                                <FaAngleUp onClick={this.handleOpen} className="icon-news"/>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}