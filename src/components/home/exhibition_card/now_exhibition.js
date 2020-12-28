import React, { Component } from 'react';

class NowExhibition extends Component {
    constructor(props) {
        super(props);

        this.state = {
            img_info: props.img_info
        }
    }

    componentDidMount() {
        this.makeExhibitionCard();
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
        const cardWrapper = document.querySelector('.card-wrapper');
        this.state.img_info.paths.forEach(path => {
            const cardItem = document.createElement('div');
            cardItem.className = 'card-item';

            const cardImage = document.createElement('img');
            cardImage.className = 'cover-img';
            cardImage.src = path;

            const captionWrapper = document.createElement('div');
            captionWrapper.className = 'caption-wrapper';

            const captionText = document.createElement('div');
            captionText.className = 'caption-text';
            captionText.innerText = 'caption';

            captionWrapper.appendChild(captionText);

            cardItem.appendChild(cardImage);
            cardItem.appendChild(captionWrapper);
            cardWrapper.appendChild(cardItem);
        });
    }
}

export default NowExhibition;