import React, { Component } from 'react';

class NowExhibition extends Component {
    constructor(props) {
        super(props);

        this.cardSize = 4;
        this.cardIdx = 0;

        this.state = {
            imgInfo: props.imgInfo
        }
    }

    componentDidMount() {
        this.makeExhibitionCard();
        setInterval(() => {
            this.rotatingExhibitionCard();
        }, 15000);
    }

    render() {
        return(
            <div className="now-exhibition-wrapper">
                <div className="title">진행중 전시</div>
                <div className="card-wrapper"></div>
            </div>
        );
    }

    makeExhibitionCard() {
        const cardWrapper = document.querySelector('.now-exhibition-wrapper .card-wrapper');

        for(let idx=0; idx<this.cardSize; idx++) {
            const cardItem = document.createElement('div');
            cardItem.className = 'card-item';

            const cardImage = document.createElement('img');
            cardImage.className = 'cover-img';
            cardImage.classList.add('lazy');
            cardImage.dataset.src = this.state.imgInfo.paths[idx];

            const captionWrapper = document.createElement('div');
            captionWrapper.className = 'caption-wrapper';

            const captionText = document.createElement('div');
            captionText.className = 'caption-text';
            captionText.innerText = 'caption';

            captionWrapper.appendChild(captionText);

            cardItem.appendChild(cardImage);
            cardItem.appendChild(captionWrapper);
            cardWrapper.appendChild(cardItem);
        }
    }

    rotatingExhibitionCard() {
        const exhibitionCardImage = document.querySelectorAll('.now-exhibition-wrapper .card-item .cover-img');

        exhibitionCardImage.forEach((image, idx) => {
            setTimeout(() => {
                image.style.opacity = 0;
            }, (idx*100));
        });
        
        this.cardIdx += this.cardSize;
        if(this.cardIdx >= this.state.imgInfo.paths.length) { this.cardIdx = 0; }
        exhibitionCardImage.forEach((image, idx) => {
            setTimeout(() => {
                image.src = this.state.imgInfo.paths[this.cardIdx + idx];
                image.style.opacity = 1;
                image.removeAttribute("style");
            }, 1000 + (idx*100));
        });
    }
}

export default NowExhibition;