import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import NavBar from './navBar';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.checkCurrentUrl = this.checkCurrentUrl.bind(this);
        this.searchInputFocus = this.searchInputFocus.bind(this);
        this.searchInputBlur = this.searchInputBlur.bind(this);
    }

    componentDidMount() {
        // url 마다 다른 아이콘 표시
        this.checkCurrentUrl();
        
        // search btn 애니매이션
        const searchInput = document.querySelector('#inpt_search');
        searchInput.addEventListener('focus', this.searchInputFocus);
        searchInput.addEventListener('blur', this.searchInputBlur);
    }

    componentDidUpdate() {
        this.checkCurrentUrl();
    }

    componentWillUnmount() {
        // url 마다 다른 아이콘 표시
        window.removeEventListener('load', this.checkCurrentUrl);
        window.removeEventListener('hashchange', this.checkCurrentUrl);

        // search btn 애니매이션
        const searchInput = document.querySelector('#inpt_search');
        searchInput.removeEventListener('focus', this.searchInputFocus);
        searchInput.removeEventListener('blur', this.searchInputBlur);
    }

    searchInputFocus(e) {
        const target = e.target.parentNode;
        target.classList.add('active');
    }

    searchInputBlur(e) {
        const target = e.target;
        const value = target.value;
        if(value.length === 0) {
            const parent = target.parentNode;
            parent.classList.remove('active');
        }
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

                <div className="search-wrapper">
                    <label className="search" htmlFor="inpt_search">
                        <input id="inpt_search" type="text"></input>
                    </label>
                </div>
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