import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Logo from './components/logo/Logo';
import PhoneMe from './components/phone-me/PhoneMe';
import ToolMenu from './components/tool-menu/ToolMenu';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

class App extends Component {
    render() {
        return (

                <div className="App container-fluid flex-column justify-content-between">
                    <Router>
                        <div className="flex-column">
                            <div className="header flex-row justify-content-between align-items-start">
                                <Logo />
                                <PhoneMe />
                                <ToolMenu />
                            </div>

                            <Route exact path="/"       render={() => <Content isHome={true} />} />
                            <Route path="/services"     render={() => <Content route="services"/>} />
                            <Route path="/catalog"      render={() => <Content route="catalog"/>} />
                            <Route path="/feedbacks"    render={() => <Content route="feedbacks"/>} />
                            <Route path="/blog"         render={() => <Content route="blog"/>} />
                            <Route path="/contacts"     render={() => <Content route="contacts"/>} />
                            <Route path="/about"        render={() => <Content route="about"/>} />
                            <Route path="/done"         render={() => <Content route="done"/>} />
                            <Route path="/prices"       render={() => <Content route="prices"/>} />
                            <Route path="/foto-gallery" render={() => <Content route="foto-gallery"/>} />
                        </div>
                    </Router>

                    <div id="footer">
                        <Footer />
                    </div>
                </div>

        );
    }
}

export default App;
