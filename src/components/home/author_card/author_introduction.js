import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class AuthorIntroduction extends Component {
    constructor(props) {
        super(props);

        this.cardSize = 4;
        this.cardIdx = 0;
        this.rotatingInterval = undefined;

        this.state = {
            imgInfo: props.imgInfo
        }
    }

    componentDidMount() {
        this.makeAuthorCard();
        
        this.rotatingInterval = setInterval(() => {
            this.rotatingAuthorCard();
        }, 15000);
    }

    componentWillUnmount() {
        clearInterval(this.rotatingInterval);
    }

    render() {
        return(
            <div className="author-introduction-wrapper">
                <div className="title">작가 소개</div>
                <div className="card-wrapper"></div>
            </div>
        );
    }

    makeAuthorCard() {
        const cardWrapper = document.querySelector('.author-introduction-wrapper .card-wrapper');

        for(let idx=0; idx<this.cardSize; idx++) {
            const cardItem = document.createElement('div');
            cardItem.className = 'card-item';
            cardItem.dataset.id = idx;

            cardItem.addEventListener('click', e => {
                const itemId = e.target.parentNode.dataset.id
                this.props.history.push(`/author/${itemId}`);
            });

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

    rotatingAuthorCard() {
        const authorCardImage = document.querySelectorAll('.author-introduction-wrapper .card-item .cover-img');

        authorCardImage.forEach((image, idx) => {
            setTimeout(() => {
                image.style.opacity = 0;
            }, ((authorCardImage.length + idx)*100));
        });

        this.cardIdx += this.cardSize;
        if(this.cardIdx >= this.state.imgInfo.paths.length) { this.cardIdx = 0; }
        authorCardImage.forEach((image, idx) => {
            setTimeout(() => {
                image.src = this.state.imgInfo.paths[this.cardIdx + idx];
                image.style.opacity = 1;
                image.removeAttribute("style");
            }, 1000 + ((authorCardImage.length + idx)*100));
        });
    }
}

export default withRouter(AuthorIntroduction);