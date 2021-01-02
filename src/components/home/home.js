import React, { Component } from 'react';

import '../../style/home/home.scss';

import HorizontalBanner from './horizontal_banner/horiziontal_banner';
import NowExhibition from './exhibition_card/now_exhibition';
import AuthorIntroduction from './author_card/author_introduction';
import Footer from '../footer/footer';

import { lazyLoad } from '../../util/lazyLoading';

class Home extends Component {
    componentDidMount() {
        lazyLoad();
    }

    render() {
        return (
            <div className="home">
                <HorizontalBanner
                imgInfo={{paths: ['sample_img/banner1.jpg', 'sample_img/banner2.jpg', 'sample_img/banner3.jpg']}}
                ></HorizontalBanner>

                <NowExhibition
                imgInfo={{paths: ['sample_img/artwork1.jpg', 'sample_img/artwork2.jpg',
                'sample_img/artwork3.jpg', 'sample_img/artwork4.jpg',
                'sample_img/artwork5.jpg', 'sample_img/artwork6.jpg',
                'sample_img/artwork7.jpg', 'sample_img/artwork8.jpg']}}
                ></NowExhibition>

                <AuthorIntroduction
                imgInfo={{paths: ['sample_img/artist8.jpg', 'sample_img/artist7.jpg',
                'sample_img/artist6.jpg', 'sample_img/artist5.jpg',
                'sample_img/artist4.jpg', 'sample_img/artist3.jpg',
                'sample_img/artist2.jpg', 'sample_img/artist1.jpg']}}
                ></AuthorIntroduction>

                <Footer></Footer>
            </div>
        );
    }
}

export default Home;