import React, { Component } from 'react';
import Logo from './components/logo/Logo';
import PhoneMe from './components/phone-me/PhoneMe';
import ToolMenu from './components/tool-menu/ToolMenu';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';

class App extends Component {
    render() {
        return (
            <div className="App container-fluid flex-column justify-content-between">
                <div className="header flex-row justify-content-between align-items-start">
                    <Logo />
                    <PhoneMe />
                    <ToolMenu />
                </div>

                <Content />

                <div id="footer">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default App;
