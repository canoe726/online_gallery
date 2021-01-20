import React, { Component } from 'react';

import '../../style/exhibition/exhibition.scss';

import MasonryLoading from '../loading/masonryLoading';
import GridGallery from './gridGallery';

import { api } from '../../api/onlineGalleryApi';

class Exhibition extends Component {
    constructor(props) {
        super(props);

        this.initGridGalleryData = this.initGridGalleryData.bind(this);
        this.changeCursorToScroll = this.changeCursorToScroll.bind(this);
        this.cursorTimeout = null;

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
        // this.initGridGalleryData();

        window.addEventListener('mousemove', this.changeCursorToScroll);
        window.addEventListener('wheel', this.changeCursorToScroll);

        this.cursorTimeout = setTimeout(() => {
            window.removeEventListener('mousemove', this.changeCursorToScroll);
            window.removeEventListener('wheel', this.changeCursorToScroll);

            const cursorScroll = document.querySelector('.cursor-scroll');
            cursorScroll.remove();
        }, 3000);
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.changeCursorToScroll);
        window.removeEventListener('wheel', this.changeCursorToScroll);

        clearTimeout(this.cursorTimeout);
    }

    render() {
        return (
            <div className="exhibition-wrapper">
                <div className="cursor-scroll">
                    <p>Scroll</p>
                </div>
                
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

    changeCursorToScroll(e) {
        const cursorScroll = document.querySelector('.cursor-scroll');

        const curMouseX = e.clientX;
        const curMouseY = e.clientY;

        cursorScroll.style.top = (window.scrollY + curMouseY - 44) + 'px';
        cursorScroll.style.left = (curMouseX - 26) + 'px';
    }

    async initGridGalleryData() {
        const response = await api.getExhibition();
        if(!response.isError) {
            this.state({
                gridGalleryData: response
            });
        } else {
            // error page
        }
    }
}

export default Exhibition;