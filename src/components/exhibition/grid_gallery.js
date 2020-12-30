import React, { Component } from 'react';

class GridGallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imgInfo: props.imgInfo
        }
    }

    componentDidMount() {
        this.makeMasonryItems();

        window.addEventListener('load', this.makeMasonryLayout.bind(this));
        window.addEventListener('resize', this.makeMasonryLayout.bind(this));
    }

    render() {
        return (
            <div className="masonry-layout"></div>
        );
    }

    makeMasonryItems() {
        const masonryLayout = document.querySelector('.masonry-layout');

        this.state.imgInfo.paths.forEach(path => {
            const masonryItem = document.createElement('div');
            masonryItem.className = 'masonry-item';

            const itemImg = document.createElement('img');
            itemImg.className = 'item-img';
            itemImg.classList.add('lazy');
            itemImg.dataset.src = path;
            itemImg.alt = 'masonry-item-img';

            const captionWrapper = document.createElement('div');
            captionWrapper.className = 'caption-wrapper';
            // captionWrapper.style.top = `${captionImage/2}px`

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
            
            masonryLayout.appendChild(masonryItem);
        });
    }

    makeMasonryLayout() {
        const masonrLayout = document.querySelector('.masonry-layout');
        const gridComputedStyle = window.getComputedStyle(masonrLayout);
        // get number of grid columns
        const gridColumnCount = gridComputedStyle.getPropertyValue("grid-template-columns").split(" ").length;
        masonrLayout.dataset.columns = gridColumnCount;

        const masonryItems = document.querySelectorAll('.masonry-layout .masonry-item');
        // init margin-top attribute
        masonryItems.forEach(item => {
            item.removeAttribute('style');
        });

        setTimeout(() => {
            masonryItems.forEach((item, idx) => {
                const image = item.querySelector('.item-img');
                const imageHeight = image.clientHeight;
    
                const captionWrapper = item.querySelector('.caption-wrapper');
                captionWrapper.style.top = `${imageHeight/2}px`
    
                const length = masonryItems.length;
                // 다음 컬럼에 margin-top 값을 결정
                if(idx + gridColumnCount < length) {
                    const itemHeight = item.clientHeight;
                    
                    item.dataset.marginTop = imageHeight - itemHeight;
                    item.dataset.height = imageHeight;
                    
                    const nextItem = masonryItems[idx + gridColumnCount];
                    nextItem.style.marginTop = `${imageHeight - itemHeight}px`;
                }            
            });
        }, 100);
        
    }
}

export default GridGallery;