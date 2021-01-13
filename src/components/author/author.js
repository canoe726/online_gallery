import React, { Component } from 'react';

import '../../style/author/author.scss';

import MasonryLoading from '../loading/masonryLoading';
import GridGallery from './gridGallery';

class Author extends Component {
    constructor(props) {
        super(props);
        
        this.initGridGalleryData = this.initGridGalleryData.bind(this);

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

    componentDidMount() {
        // fetch init data async
        // this.initGridGalleryData(async_data);
    }

    render() {
        return (
            <div className="author-wrapper">
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

export default Author;