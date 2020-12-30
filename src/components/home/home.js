import React, { Component } from 'react';

import '../../style/home/home.scss';

import Footer from '../footer/footer';

import HorizontalBanner from './horizontal_banner/horiziontal_banner';

import NowExhibition from './exhibition_card/now_exhibition';

import AuthorIntroduction from './author_card/author_introduction';

import { lazyLoad } from '../../util/lazyLoading';

class Home extends Component {
    componentDidMount() {
        lazyLoad();
    }

    render() {
        return (
            <div className="home">
                <HorizontalBanner
                imgInfo={{paths: ['sample_img/image1.jpg', 'sample_img/image2.jpg', 'sample_img/image3.jpg']}}
                ></HorizontalBanner>

                <NowExhibition
                imgInfo={{paths: ['sample_img/image1.jpg', 'sample_img/image2.jpg', 'sample_img/image3.jpg', 'sample_img/image4.jpg', 'sample_img/image5.jpg', 'sample_img/image6.jpg', 'sample_img/image7.jpg', 'sample_img/image8.jpg']}}
                ></NowExhibition>

                <AuthorIntroduction
                imgInfo={{paths: ['sample_img/image8.jpg', 'sample_img/image7.jpg', 'sample_img/image6.jpg', 'sample_img/image5.jpg', 'sample_img/image4.jpg', 'sample_img/image3.jpg', 'sample_img/image2.jpg', 'sample_img/image1.jpg']}}
                ></AuthorIntroduction>

                <Footer></Footer>
            </div>
        );
    }
}

export default Home;