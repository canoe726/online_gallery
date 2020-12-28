import React, { Component } from 'react';

import NavBar from './nav_bar';

class Menu extends Component {
    render() {
        return (
            <div className="header-menu">
                <NavBar></NavBar>
        
                <div className="gallery-logo">
                    <a className="gallery-name" href="/">Online - Gallery</a>
                </div>
            </div>
        );
    }
}

export default Menu;