import React, { Component } from 'react';

import '../../style/author/author.scss';

import MasonryLoading from '../loading/masonry_loading';
import GridGallery from './grid_gallery';

class Author extends Component {
    constructor(props) {
        super(props);

        this.state = {
            paths: ['sample_img/artist1.jpg', 'sample_img/artist2.jpg',
             'sample_img/artist3.jpg', 'sample_img/artist4.jpg', 
             'sample_img/artist5.jpg', 'sample_img/artist6.jpg', 
             'sample_img/artist7.jpg', 'sample_img/artist8.jpg',],
            changedPaths: ['sample_img/artist8.jpg', 'sample_img/artist7.jpg', 
            'sample_img/artist6.jpg', 'sample_img/artist5.jpg', 
            'sample_img/artist4.jpg', 'sample_img/artist3.jpg', 
            'sample_img/artist2.jpg', 'sample_img/artist1.jpg'],
        }
    }

    render() {
        return (
            <div className="author-wrapper">
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

export default Author;