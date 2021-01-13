import React, { Component } from 'react';

import '../../style/home/home.scss';

import HorizontalBanner from './horizontal_banner/horiziontalBanner';
import NowExhibition from './exhibition_card/nowExhibition';
import AuthorIntroduction from './author_card/authorIntroduction';
import Footer from '../footer/footer';

import { lazyLoad } from '../../util/lazyLoading';

class Home extends Component {
    constructor(props) {
        super(props);

        this.initHorizontalBannerData = this.initHorizontalBannerData.bind(this);
        this.initNowExhibitionData = this.initNowExhibitionData.bind(this);
        this.initAuthorIntroductionData = this.initAuthorIntroductionData.bind(this);

        this.state = {}
    }
    
    componentDidMount() {
        // get async data from home restful api and setstate
        // this.initHorizontalBannerImg(async_data);
        // this.initNowExhibitionData(async_data);
        // this.initAuthorIntroductionData(async_data);

        lazyLoad();
    }

    render() {
        return (
            <div className="home">
                <HorizontalBanner
                data={
                    {
                        paths: ['sample_img/banner1.jpg', 'sample_img/banner2.jpg', 'sample_img/banner3.jpg']
                    }
                    // this.state.horizontalBannerData
                }
                ></HorizontalBanner>

                <NowExhibition
                data={
                    {
                        paths: ['sample_img/artwork1.jpg', 'sample_img/artwork2.jpg',
                        'sample_img/artwork3.jpg', 'sample_img/artwork4.jpg',
                        'sample_img/artwork5.jpg', 'sample_img/artwork6.jpg',
                        'sample_img/artwork7.jpg', 'sample_img/artwork8.jpg']
                    }
                    // this.state.howExhibitionData
                }
                ></NowExhibition>

                <AuthorIntroduction
                data={
                    {
                        paths: ['sample_img/artist1.jpg', 'sample_img/artist2.jpg',
                        'sample_img/artist3.jpg', 'sample_img/artist4.jpg',
                        'sample_img/artist5.jpg', 'sample_img/artist6.jpg',
                        'sample_img/artist7.jpg', 'sample_img/artist8.jpg']
                    }
                    // this.state.authorIntroductionData
                }
                ></AuthorIntroduction>

                <Footer></Footer>
            </div>
        );
    }

    initHorizontalBannerData(data) {
        this.setState({
            horizontalBannerData: data
        });
    }

    initNowExhibitionData(data) {
        this.setState({
            howExhibitionData: data
        });
    }

    initAuthorIntroductionData(data) {
        this.setState({
            authorIntroductionData: data
        });
    }
}

export default Home;