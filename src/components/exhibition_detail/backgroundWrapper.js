import React, { Component } from 'react';

class BackgroundImg extends Component {
    componentDidMount() {
        this.initBackgroundImg(this.props.data);
    }

    // componentDidUpdate() {
    //     this.initBackgroundImg(this.props.data);
    // }

    render() {
        return (
            <div className="background-wrapper load-next"></div>
        );
    }

    initBackgroundImg(batchData) {       // 백그라운드 이미지 생성
        const backgroundWrapper = document.querySelector('.background-wrapper');
        backgroundWrapper.innerHTML = '';
        backgroundWrapper.removeAttribute('style');

        batchData.forEach((item, idx) => {
            const data = item.backgroundImg;

            const heroSection = document.createElement('div');
            heroSection.className = 'hero-section';
            
            if(data.type === 'color') {
                const backgroundColor = document.createElement('div');
                backgroundColor.className = 'color';

                backgroundColor.style.backgroundColor = data.backgroundColor;
                backgroundColor.style.opacity = data.opacity;
                
                heroSection.appendChild(backgroundColor);

            } else if(data.type === 'image') {
                const backgroundImg = document.createElement('img');
                backgroundImg.className = 'img';
                backgroundImg.src = data.imgPath;

                if(data.imgBlur === 'Y') {
                    backgroundImg.style.filter = 'blur(2px)';
                }

                heroSection.appendChild(backgroundImg);

            } else if(data.type === 'video') {
                const backgroundVideo = document.createElement('video');
                backgroundVideo.className = 'video';
                backgroundVideo.classList.add('play');
                backgroundVideo.src = data.imgPath;
                backgroundVideo.autoplay = "autoplay";
                backgroundVideo.muted = "muted";
                
                backgroundVideo.addEventListener('click', e => {
                    const target = e.target;
                    if(target.classList.contains('ended')) {
                        target.classList.remove('ended');
                        target.classList.add('play');
                        target.play();
                        return;
                    }

                    if(target.classList.contains('play')) {
                        target.classList.remove('play');
                        target.pause();
                    } else {
                        target.classList.add('play');
                        target.play();
                    }
                });

                backgroundVideo.addEventListener('ended', e => {
                    const target = e.target;
                    target.classList.remove('play');
                    target.classList.add('ended');
                });

                heroSection.appendChild(backgroundVideo);
            }

            if(idx === 0) heroSection.classList.add('active');
            if(idx === batchData.length - 1) heroSection.classList.add('prev');

            backgroundWrapper.appendChild(heroSection);
        });
    }
}

export default BackgroundImg;