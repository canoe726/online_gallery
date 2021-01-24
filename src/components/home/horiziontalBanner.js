import React, { Component } from 'react';

class HorizontalBanner extends Component {
    constructor(props) {
        super(props);

        this.cardIdx = 0;
        this.bannerInterval = undefined;
        this.currentSlide = this.currentSlide.bind(this);
        this.plusSlides = this.plusSlides.bind(this);
    }

    componentDidMount() {
        this.initBannerCards();
        this.initDots();
        
        this.showSlides(this.cardIdx);
        this.bannerInterval = setInterval(() => {
            this.cardIdx += 1;
            this.showSlides(this.cardIdx);
        }, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.bannerInterval);
    }    

    render() {
        return (
            <div className="horizontal-banner">
                <div className="banner-card-wrapper"></div>
                
                <div className="prev" onClick={() => this.plusSlides(-1)}>&#10094;</div>
                <div className="next" onClick={() => this.plusSlides(1)}>&#10095;</div>

                <div className="banner-dot"></div>
            </div>    
        );
    }

    initDots() {
        const bannerDot = document.querySelector('.banner-dot');
        const dotSize = this.props.data.paths.length;
        for(let idx=0; idx<dotSize; idx++) {
            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.addEventListener('click', () => this.currentSlide(idx));

            bannerDot.appendChild(dot);
        }
    }

    initBannerCards() {
        const bannerCardWrappper = document.querySelector('.banner-card-wrapper');

        this.props.data.paths.forEach(path => {
            const slideCard = document.createElement('div');
            slideCard.className = 'slide-card fade';

            const cardImg = document.createElement('img');
            cardImg.className = 'card-img';
            cardImg.src = path;
            cardImg.alt = 'banner-card-item';

            slideCard.appendChild(cardImg);
            bannerCardWrappper.appendChild(slideCard);
        });        
    }

    plusSlides(idx) {
        this.showSlides(this.cardIdx += idx);
    }

    currentSlide(idx) {
        this.showSlides(idx);
    }

    showSlides(idx) {
        const cards = document.querySelectorAll('.slide-card');
        const dots = document.querySelectorAll('.dot');

        this.cardIdx = idx;
    
        if(this.cardIdx >= cards.length) { this.cardIdx = 0; }
        if(this.cardIdx < 0) { this.cardIdx = cards.length - 1; }

        cards.forEach(card => {
            card.style.display = 'none';
        });

        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        cards[this.cardIdx].style.display = 'block';
        dots[this.cardIdx].classList.add('active');
    }
}

export default HorizontalBanner;