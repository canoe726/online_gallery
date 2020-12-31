import React, { Component } from 'react';

class HorizontalBanner extends Component {
    constructor(props) {
        super(props);

        this.cardIdx = 1;

        this.state = {
            imgInfo: props.imgInfo
        }
    }

    componentDidMount() {
        this.makeBannerCards();
        
        this.showSlides(this.cardIdx);
        setInterval(() => {
            this.cardIdx += 1;
            this.showSlides(this.cardIdx);
        }, 10000);
    }

    render() {
        return (
            <div className="horizontal-banner">
                <div className="banner-card-wrapper"></div>
                
                <div className="prev" onClick={this.plusSlides.bind(this, -1)}>&#10094;</div>
                <div className="next" onClick={this.plusSlides.bind(this, 1)}>&#10095;</div>

                <div className="banner-dot">
                    <span className="dot" onClick={this.currentSlide.bind(this, 1)}></span> 
                    <span className="dot" onClick={this.currentSlide.bind(this, 2)}></span> 
                    <span className="dot" onClick={this.currentSlide.bind(this, 3)}></span> 
                </div>
            </div>    
        );
    }

    makeBannerCards() {
        const bannerCardWrappper = document.querySelector('.banner-card-wrapper');

        this.state.imgInfo.paths.forEach(path => {
            const slideCard = document.createElement('div');
            slideCard.className = 'slide-card fade';

            const cardImg = document.createElement('img');
            cardImg.className = 'card-img';
            cardImg.src = path;
            cardImg.alt = 'banner-card-item';

            slideCard.appendChild(cardImg);
            bannerCardWrappper.append(slideCard);
        });        
    }

    plusSlides(idx, e) {
        this.showSlides(this.cardIdx += idx);
    }

    currentSlide(idx, e) {
        this.showSlides(idx);
    }

    showSlides(idx) {
        const cards = document.querySelectorAll('.slide-card');
        const dots = document.querySelectorAll('.dot');

        this.cardIdx = idx;
    
        if(this.cardIdx > cards.length) { this.cardIdx = 1; }
        if(this.cardIdx < 1) { this.cardIdx = cards.length; }

        cards.forEach(card => {
            card.style.display = 'none';
        });

        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        cards[this.cardIdx-1].style.display = 'block';
        dots[this.cardIdx-1].classList.add('active');
    }
}

export default HorizontalBanner;