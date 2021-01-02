import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class NavBar extends Component {
    componentDidMount() {
        window.addEventListener('click', this.handleClickOutside.bind(this));
    }

    render() {
        return(
            <div className="nav-bar">
                <div className="nav-menu-btn">
                    <i className="fas fa-bars" onClick={this.openNav.bind(this)}></i>
                </div>

                <div id="main-side-nav" className="nav-menus">                    
                    <a href="#closebtn" className="close-btn" onClick={this.closeNav.bind(this)}>&times;</a>
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
        const navBar = document.querySelector('#main-side-nav');
        const width = navBar.style.width;      
        const btn = e.target.classList.contains('fa-bars');
        const nav = e.target.classList.contains('nav-menus');
        if(width === "350px" && !btn && !nav) {
            document.querySelector('#main-side-nav').style.width = "0";
        }
    }

    openNav(e) {
        document.querySelector('#main-side-nav').style.width = "350px";
    }
    
    closeNav(e) {
        e.preventDefault();
        document.querySelector('#main-side-nav').style.width = "0";
    }
}

export default NavBar;