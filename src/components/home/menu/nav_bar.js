import React, { Component } from 'react';

class NavBar extends Component {
    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    render() {
        return(
            <div className="nav-bar">
                <div className="nav-menu-btn">
                    <i className="fas fa-bars" onClick={openNav}></i>
                </div>

                <div id="main-side-nav" className="nav-menus">
                    <a href="#closebtn" className="close-btn" onClick={closeNav}>&times;</a>
                    <a href="/introduction">온라인 갤러리 소개</a>
                    <a href="/exhibition">온라인 갤러리</a>
                    <a href="/author">작가 소개</a>
                    <a href="/notice">공지사항</a>
                </div>
            </div>
        );
    }

    handleClickOutside = event => {
        const target = event.target;
        const isOutSide = target.querySelector('#main-side-nav');
        if(isOutSide) {
            document.querySelector('#main-side-nav').style.width = "0";
        }
    }
}

function openNav() {
    document.querySelector('#main-side-nav').style.width = "350px";
}

function closeNav(e) {
    e.preventDefault();
    document.querySelector('#main-side-nav').style.width = "0";
}

export default NavBar;