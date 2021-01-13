import React, { Component } from 'react';

import '../../style/exhibition/exhibition.scss';

import MasonryLoading from '../loading/masonryLoading';
import GridGallery from './gridGallery';

class Exhibition extends Component {
    constructor(props) {
        super(props);

        this.initGridGalleryData = this.initGridGalleryData.bind(this);

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

    componentDidMount() {
        // fetch init data async
        // this.initGridGalleryData(async_data);
    }

    render() {
        return (
            <div className="exhibition-wrapper">
                <div className="masonry-wrapper">
                    <GridGallery
                    data={
                        {
                            paths:this.state.paths
                        }
                        // this.state.gridGalleryData
                    }
                    onScroll={mode => {
                        // fetch data async and return
                        // const response = api.fetch...

                        return {paths:this.state.changedPaths};
                    }}
                    ></GridGallery>
                </div>
                
                <MasonryLoading></MasonryLoading>
            </div>
        );
    }

    initGridGalleryData(data) {
        this.state({
            gridGalleryData: data
        });
    }
}

export default Exhibition;