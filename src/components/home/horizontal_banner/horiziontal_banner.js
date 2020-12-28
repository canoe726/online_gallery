import React, { Component } from 'react';

class HorizontalBanner extends Component {
    constructor(props) {
        super(props);

        this.card_idx = 1;

        this.state = {
            img_info: props.img_info
        }
    }

    componentDidMount() {
        this.makeBannerCards();
        
        this.showSlides(this.card_idx);
        // setInterval(() => {
        //     this.card_idx += 1;
        //     this.showSlides(this.card_idx);
        // }, 3000);
    }

    render() {
        return (
            <div className="horizontal-banner">
                <div className="banner-card-wrapper"></div>

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

        this.state.img_info.paths.forEach(path => {
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

    currentSlide(idx, e) {
        this.showSlides(idx);
    }

    showSlides(idx) {
        const cards = document.querySelectorAll('.slide-card');
        const dots = document.querySelectorAll('.dot');

        this.card_idx = idx;
    
        if(this.card_idx > cards.length) { this.card_idx = 1; }
        if(this.card_idx < 1) { this.card_idx = cards.length; }

        cards.forEach(card => {
            card.style.display = 'none';
        });

        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        cards[this.card_idx-1].style.display = 'block';
        dots[this.card_idx-1].classList.add('active');
    }
}

export default HorizontalBanner;