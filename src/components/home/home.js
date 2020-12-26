import React, { Component } from 'react';

import Menu from './menu/menu';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Menu></Menu>
            </div>
        );
    }
}

export default Home;