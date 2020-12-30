import React, { Component } from 'react';

import '../../style/author/author.scss';

import GridGallery from './grid_gallery';

class Author extends Component {
    constructor(props) {
        super(props);

        this.state = {
            paths: ['sample_img/image1.jpg', 'sample_img/image2.jpg', 'sample_img/image3.jpg', 'sample_img/image4.jpg', 'sample_img/image5.jpg', 'sample_img/image6.jpg', 'sample_img/image7.jpg', 'sample_img/image8.jpg','sample_img/image1.jpg', 'sample_img/image2.jpg', 'sample_img/image3.jpg', 'sample_img/image4.jpg', 'sample_img/image5.jpg', 'sample_img/image6.jpg', 'sample_img/image7.jpg', 'sample_img/image8.jpg'],
            changedPaths: ['sample_img/image8.jpg', 'sample_img/image7.jpg', 'sample_img/image6.jpg', 'sample_img/image5.jpg', 'sample_img/image4.jpg', 'sample_img/image3.jpg', 'sample_img/image2.jpg', 'sample_img/image1.jpg'],
        }
    }

    render() {
        return (
            <div className="author-wrapper">
                <GridGallery
                imgInfo={{paths:this.state.paths}}
                onScroll={mode => {
                    return {paths:this.state.changedPaths};
                }}
                ></GridGallery>
            </div>
        );
    }
}

export default Author;