import React, { Component } from 'react';

import '../../style/exhibition/exhibition.scss';

import MasonryLoading from '../loading/masonry_loading';
import GridGallery from './grid_gallery';

class Exhibition extends Component {
    constructor(props) {
        super(props);

        this.state = {
            paths: ['sample_img/artwork1.jpg', 'sample_img/artwork2.jpg',
             'sample_img/artwork3.jpg', 'sample_img/artwork4.jpg', 
             'sample_img/artwork5.jpg', 'sample_img/artwork6.jpg', 
             'sample_img/artwork7.jpg', 'sample_img/artwork8.jpg',],
            changedPaths: ['sample_img/artwork8.jpg', 'sample_img/artwork7.jpg', 
            'sample_img/artwork6.jpg', 'sample_img/artwork5.jpg', 
            'sample_img/artwork4.jpg', 'sample_img/artwork3.jpg', 
            'sample_img/artwork2.jpg', 'sample_img/artwork1.jpg'],
        }
    }

    render() {
        return (
            <div className="exhibition-wrapper">
                <div className="masonry-wrapper">
                    <GridGallery
                    imgInfo={{paths:this.state.paths}}
                    onScroll={mode => {
                        return {paths:this.state.changedPaths};
                    }}
                    ></GridGallery>
                </div>
                
                <MasonryLoading></MasonryLoading>
            </div>
        );
    }
}

export default Exhibition;