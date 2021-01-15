import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import NavBar from './navBar';
import Search from './search';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.checkCurrentUrl = this.checkCurrentUrl.bind(this);
    }

    componentDidMount() {
        // url 마다 다른 아이콘 표시
        this.checkCurrentUrl();
    }

    componentDidUpdate() {
        // url 마다 다른 아이콘 표시
        this.checkCurrentUrl();
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

                <Search></Search>
            </div>
        );
    }

    checkCurrentUrl() {
        const searchWrapper = document.querySelector('.search-wrapper');
        const curUrl = window.location.pathname;
        if(curUrl === '/exhibition' || curUrl === '/author') {
            searchWrapper.classList.remove('hidden');
            searchWrapper.style.visibility = 'visible';
        } else {
            searchWrapper.classList.add('hidden');
            searchWrapper.style.visibility = 'collapse';
        }
    }
}

export default Menu;