import React, { Component } from 'react';

import '../../style/introduction/introduction.scss';

import { setFullPage } from '../../util/fullPage';

class Introduction extends Component {
    constructor(props) {
        super(props);

        this.numOfSection = 3;

        // fetch data async
        this.state = {
            cardInfo: [
                {
                    path: "./sample_img/introduction1.jpg",
                    title: "온라인 갤러리 소개 1",
                    contents: "온라인 갤러리 입니다."
                },
                {
                    path: "./sample_img/introduction2.jpg",
                    title: "온라인 갤러리 소개 2",
                    contents: "온라인 갤러리 입니다."
                },
                {
                    path: "./sample_img/introduction3.jpg",
                    title: "온라인 갤러리 소개 3",
                    contents: "온라인 갤러리 입니다."
                }
            ]
        }
    }

    componentDidMount() {
        // after fetch async add element
        this.makeIntroductionCard();

        setFullPage();
    }

    render() {
        return (
            <div className="introduction-wrapper">
                <div id="hero-slider" className="hero-slider load-next"></div>
            </div>
        );
    }

    makeIntroductionCard() {    
        const heroSlider = document.querySelector('#hero-slider');
        
        for(let idx=0; idx<this.numOfSection; idx++) {

            const itemSection = document.createElement('section');
            // 항상 첫 번째 카드가 활성화
            if(idx === 0) {
                itemSection.className = 'hero-slider-item active';
            } else if(idx === (this.numOfSection - 1)) {
                itemSection.className = 'hero-slider-item prev';
            } else {
                itemSection.className = 'hero-slider-item';
            }           

            const introductionCard = document.createElement('div');
            introductionCard.className = 'introduction-card';

            const cardImg = document.createElement('img');
            cardImg.className = 'card-img';
            cardImg.src = this.state.cardInfo[idx].path;
            cardImg.alt = `introduction-card-item-${idx+1}`

            const captionWrapper = document.createElement('div');
            captionWrapper.className = 'caption-wrapper';

            const title = document.createElement('div');
            title.className = 'title';
            title.innerText = this.state.cardInfo[idx].title;

            const contents = document.createElement('div');
            contents.className = 'contents';
            contents.innerText = this.state.cardInfo[idx].contents;

            captionWrapper.appendChild(title);
            captionWrapper.appendChild(contents);

            introductionCard.appendChild(cardImg);
            introductionCard.appendChild(captionWrapper);

            itemSection.appendChild(introductionCard);

            heroSlider.appendChild(itemSection);
        }
    }
}

export default Introduction;