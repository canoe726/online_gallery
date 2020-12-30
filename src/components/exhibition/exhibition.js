import React, { Component } from 'react';

import '../../style/exhibition/exhibition.scss';

import GridGallery from './grid_gallery';

import { lazyLoad } from '../../util/lazyLoading';

class Exhibition extends Component {
    componentDidMount() {
        lazyLoad();
    }

    render() {
        return (
            <div className="exhibition-wrapper">
                <GridGallery
                imgInfo={{paths: ['sample_img/image1.jpg', 'sample_img/image2.jpg', 'sample_img/image3.jpg', 'sample_img/image4.jpg', 'sample_img/image5.jpg', 'sample_img/image6.jpg', 'sample_img/image7.jpg', 'sample_img/image8.jpg']}}
                ></GridGallery>
            </div>
        );
    }
}

export default Exhibition;