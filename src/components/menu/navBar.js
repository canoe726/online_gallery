import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        window.addEventListener('click', this.handleClickOutside);
    }

    render() {
        return(
            <div className="nav-bar">
                <div className="nav-menu-btn">
                    <button className="menu-toggle" onClick={this.toggleNav}>Menu</button>
                </div>

                <div id="main-side-nav" className="nav-menus">
                    <Link to="/introduction">
                        <div>온라인 갤러리 소개</div>
                    </Link>
                    <Link to="/exhibition">
                        <div>온라인 갤러리</div>
                    </Link>
                    <Link to="/author">
                        <div>작가 소개</div>
                    </Link>
                    <Link to="/notice">
                        <div>공지사항</div>
                    </Link>
                </div>
            </div>
        );
    }

    handleClickOutside(e) {
        const mainSideNav = document.querySelector('#main-side-nav');
        const width = mainSideNav.style.width;      
        const isMenu = e.target.classList.contains('menu-toggle');
        const isSideNav = e.target.classList.contains('nav-menus');

        if(!isMenu && !isSideNav) {
            if(width === "350px") {
                mainSideNav.style.width = "0";
                
                const menuToggle = document.querySelector('.menu-toggle');
                menuToggle.classList.remove('is-active');
            }
        }
    }

    toggleNav(e) {
        const target = e.target;
        target.classList.toggle('is-active');
        
        const mainSideNav = document.querySelector('#main-side-nav');
        if(target.classList.contains('is-active')) {
            mainSideNav.style.width = "350px";
        } else {
            mainSideNav.style.width = "0px";
        }
    }
}

export default NavBar;