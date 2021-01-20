import React, { Component } from 'react';

class BackgroundImg extends Component {
    componentDidMount() {
        this.initBackgroundImg(this.props.data);
    }

    componentDidUpdate() {
        this.initBackgroundImg(this.props.data);
    }

    render() {
        return (
            <div className="background-img"></div>
        );
    }

    initBackgroundImg(data) {       // 백그라운드 이미지 생성
        const background = document.querySelector('.background-img');
        background.innerHTML = '';
        background.removeAttribute('style');
        
        if(data.type === 'color') {
            background.style.backgroundColor = data.backgroundColor;
            background.style.opacity = data.opacity;

        } else if(data.type === 'image') {
            const backgroundImg = document.createElement('img');
            backgroundImg.className = 'img';
            backgroundImg.src = data.imgPath;

            if(data.imgBlur === 'Y') {
                backgroundImg.style.filter = 'blur(2px)';
            }

            background.appendChild(backgroundImg);

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

            background.appendChild(backgroundVideo);
        }
    }
}

export default BackgroundImg;