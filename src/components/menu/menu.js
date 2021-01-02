import React, { Component } from 'react';

import { Link } from 'react-router-dom';

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
                    <Link to="/">
                        <div className="gallery-name">Online - Gallery</div>
                    </Link>
                </div>
                
                <div className="search hidden">
                    <i className="fas fa-search"></i>
                </div>
            </div>
        );
    }

    checkCurrentUrl() {
        const searchBtn = document.querySelector('.search');
        const curUrl = window.location.pathname;
        if(curUrl === 'exhibition') {
            searchBtn.classList.remove('hidden');
        } else {
            searchBtn.classList.add('hidden');
        }
    }
}

export default Menu;