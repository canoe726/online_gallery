import React, { Component } from 'react';

import '../../style/home/home.scss';

import Menu from './menu/menu';
import HorizontalBanner from './horizontal_banner/horiziontal_banner';

import NowExhibition from './exhibition_card/now_exhibition';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <Menu></Menu>
                <HorizontalBanner
                img_info={{paths: ['sample_img/image1.jpg', 'sample_img/image2.jpg', 'sample_img/image3.jpg']}}
                ></HorizontalBanner>
                <NowExhibition
                img_info={{paths: ['sample_img/image1.jpg', 'sample_img/image2.jpg', 'sample_img/image3.jpg', 'sample_img/image4.jpg']}}
                ></NowExhibition>
            </div>
        );
    }
}

export default Home;