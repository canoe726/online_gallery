import React, { Component } from 'react';

import { lazyLoad } from '../../util/lazyLoading';

class GridGallery extends Component {
    constructor(props) {
        super(props);

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

        waitForImages();
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

        if(scrollTop + clientHeight >= scrollHeight) {
            const data = this.props.onScroll('exhibition');

            if(!data) {
                // 더이상 호출가능한 데이터가 없습니다.
            }

            this.addMasonryItems(data);
            lazyLoad();
            resizeAllMasonryItems();
        }
    }
} 

function resizeMasonryItem(item) {
    /* Get the grid object, its row-gap, and the size of its implicit rows */
    const grid = document.querySelector('.masonry');
    const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  
    /*
     * Spanning for any brick = S
     * Grid's row-gap = G
     * Size of grid's implicitly create row-track = R
     * Height of item content = H
     * Net height of the item = H1 = H + G
     * Net height of the implicit row-track = T = G + R
     * S = H1 / T
     */
    var rowSpan = Math.ceil((item.querySelector('.item-img').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
  
    /* Set the spanning as calculated above (S) */
    item.style.gridRowEnd = 'span ' + rowSpan;
}

// 모든 masonry-item 에 대해서 크기 조정
function resizeAllMasonryItems() {
    const allItems = document.querySelectorAll('.masonry-item');
    console.log(allItems)
    allItems.forEach(item => {
      resizeMasonryItem(item);
    });
}

// 이미지가 로딩 된 후 모든 크기 조정
function waitForImages() {
    const allItems = document.querySelectorAll('.masonry-item');
    allItems.forEach(item => {
        const itemImg = item.querySelector('.item-img');
        const notLoad = itemImg.classList.contains('lazy');
        if(!notLoad) {
            resizeMasonryItem(item);
        }
    });
}

export default GridGallery;