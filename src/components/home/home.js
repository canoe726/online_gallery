import React, { Component } from 'react';

import '../../style/home/home.scss';

import HorizontalBanner from './horiziontalBanner';
import NowExhibition from './nowExhibition';
import AuthorIntroduction from './authorIntroduction';
import Footer from '../footer/footer';

import { lazyLoad } from '../../util/lazyLoading.js';

import { api } from '../../api/onlineGalleryApi';

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
        this.initHorizontalBannerData();
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

    async initHorizontalBannerData() {
        const response = await api.getHomeBanner();
        console.log(response);
        if(!response.isError) {
            this.setState({
                horizontalBannerData: response
            });
        } else {
            // error page
        }
    }

    async initNowExhibitionData() {
        const response = await api.getHomeExhibition();
        if(!response.isError) {
            this.setState({
                howExhibitionData: response
            });
        } else {
            // error page
        }
    }

    async initAuthorIntroductionData() {
        const response = await api.getHomeArtist();
        if(!response.isError) {
            this.setState({
                authorIntroductionData: response
            });
        } else {
            // error page
        }
    }
}

export default Home;