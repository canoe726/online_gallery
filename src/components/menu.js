import React, { Component } from 'react';

class Menu extends Component {
    render() {
        return (
            <div className="header_menu">
                <div className="nav_menu_btn">
                    <i className="fas fa-bars"></i>
                    <div className="nav_menu_bar">
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
                
                <div>
                    <a className="gallery_name" href="#home">온라인 갤러리</a>
                </div>

                <div className="menu_tabs">
                    <div className="menu_tab home">
                        <a className="active" href="#home">
                            홈
                        </a>
                    </div>
                    <div className="menu_tab home">
                        <a className="active" href="#home">
                            주변
                        </a>
                    </div>
                    <div className="menu_tab search">
                        <a href="#search">
                            <i className="fas fa-search"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;