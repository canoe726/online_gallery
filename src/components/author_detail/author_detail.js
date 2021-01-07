import React, { Component } from 'react';

import '../../style/author_detail/author_detail.scss';

import InfoWrapper from './info_wrapper';
import ArtworkMasonry from './artwork_masonry';
import MasonryLoading from '../loading/masonry_loading';

class AuthorDetail extends Component {
    constructor(props) {
        super(props);

        this.authorId = window.location.pathname;
        this.authorId = this.authorId.split('/');
        this.authorId = (this.authorId[2] * 1) + 1;
        if(this.authorId > 8) {
            this.authorId = 8;
        }

        window.scrollTo(0,0);

        this.state = {
            paths: ['/sample_img/artist_d_1.jpg', '/sample_img/artist_d_2.jpg',
             '/sample_img/artist_d_3.jpg', '/sample_img/artist_d_4.jpg', 
             '/sample_img/artist_d_5.jpg', '/sample_img/artist_d_6.jpg', 
             '/sample_img/artist_d_7.jpg', '/sample_img/artist_d_8.jpg',],
            changedPaths: ['/sample_img/artist_d_8.jpg', '/sample_img/artist_d_7.jpg', 
            '/sample_img/artist_d_6.jpg', '/sample_img/artist_d_5.jpg', 
            '/sample_img/artist_d_4.jpg', '/sample_img/artist_d_3.jpg', 
            '/sample_img/artist_d_2.jpg', '/sample_img/artist_d_1.jpg'],
        }

        this.heroScrollZoomFunc = this.heroScrollZoom.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.heroScrollZoom);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.heroScrollZoom);
    }

    render() {
        return (
            <div className="author-detail-wrapper">
                <div className="thumbnail-wrapper zoom">
                    <img className="main-img" src={`/sample_img/artist${this.authorId}.jpg`} alt="author-main-img-"></img>
                </div> 

                <InfoWrapper
                ></InfoWrapper>

                <div className="masonry-wrapper">
                    <ArtworkMasonry
                    imgInfo={{paths:this.state.paths}}
                    onScroll={mode => {
                        return {paths:this.state.changedPaths};
                    }}
                    ></ArtworkMasonry>
                    
                    <MasonryLoading></MasonryLoading>
                </div>
            </div>
        );
    }

    heroScrollZoom() {
        const scrollY = window.scrollY;
        const zoomImg = document.querySelector('.zoom img');
        const scaleRatio = (100 + scrollY/5) / 100;
        if(Math.floor(scaleRatio) > 2) return;
        zoomImg.style.transform = `translate3d(-50%, -${scrollY/50}%, 0) scale(${scaleRatio})`;
    }
}

export default AuthorDetail;