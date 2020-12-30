import React, { Component } from 'react';

import NavBar from './nav_bar';

class Menu extends Component {
    componentDidMount() {
        window.addEventListener('load', this.checkCurrentUrl.bind(this));
    }

    render() {
        return (
            <div className="header-menu">
                <NavBar></NavBar>
        
                <div className="gallery-logo">
                    <a className="gallery-name" href="/">Online - Gallery</a>
                </div>
                
                <div className="search hidden">
                    <i className="fas fa-search"></i>
                </div>
            </div>
        );
    }

    checkCurrentUrl() {
        const searchBtn = document.querySelector('.search');
        const urls = window.location.href.split('/');
        if(urls[3] === 'exhibition') {
            searchBtn.classList.remove('hidden');
        } else {
            searchBtn.classList.add('hidden');
        }
    }
}

export default Menu;