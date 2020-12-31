import React, { Component } from 'react';

import { toggleMasonryLoading } from '../loading/masonry_loading';

import { lazyLoad } from '../../util/lazyLoading';
import { resizeAllMasonryItems } from '../../util/masonry';

class GridGallery extends Component {
    constructor(props) {
        super(props);
        
        this.isFetch = false;

        this.state = {
            imgInfo: props.imgInfo
        }
    }

    componentDidMount() {
        this.addMasonryItems(this.state.imgInfo);
        lazyLoad();

        // 무한 스크롤
        window.addEventListener('scroll', this.infinityScroll.bind(this));

        // Masonry
        const masonryEvents = ['load', 'resize'];
        masonryEvents.forEach(event => {
            window.addEventListener(event, resizeAllMasonryItems);
        });
    }

    render() {
        return (
            <div className="masonry"></div>
        );
    }

    addMasonryItems(imgInfo) {
        const masonry = document.querySelector('.masonry');

        imgInfo.paths.forEach(path => {
            const masonryItem = document.createElement('div');
            masonryItem.className = 'masonry-item';

            const itemImg = document.createElement('img');
            itemImg.className = 'item-img';
            itemImg.classList.add('lazy');
            itemImg.dataset.src = path;
            itemImg.alt = 'masonry-item-img';

            const captionWrapper = document.createElement('div');
            captionWrapper.className = 'caption-wrapper';

            const captionImage = document.createElement('div');
            captionImage.className = 'caption image';
            captionImage.innerText = '작품명';

            const captionAuthor = document.createElement('div');
            captionAuthor.className = 'caption author';
            captionAuthor.innerText = '작가명';

            captionWrapper.appendChild(captionImage);
            captionWrapper.appendChild(captionAuthor);

            masonryItem.appendChild(itemImg);
            masonryItem.appendChild(captionWrapper);
            
            masonry.appendChild(masonryItem);
        });
    }

    infinityScroll() {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        // 스크롤이 최하단이면서 fetch 중이 아닐 때 호출
        if(scrollTop + clientHeight >= scrollHeight && !this.isFetch) {
            toggleMasonryLoading();
            const data = this.props.onScroll('author');

            this.isFetch = true;
            if(!data) {
                // 더이상 호출가능한 데이터가 없습니다.
                return;
            }

            this.addMasonryItems(data);
            lazyLoad();
            toggleMasonryLoading();
            this.isFetch = false;
        }
    }
}

export default GridGallery;