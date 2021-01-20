import React, { Component } from 'react';

import { initModalContent } from './modalWrapper';

import { playBackgroundMusic, stopBackgroundMusic, volumeBackgroundMusic } from './backgroundMusic';

class BatchWrapper extends Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        this.initBatchWrapper(this.props.data);

        const batchWrapper = document.querySelector('.batch-wrapper');
        batchWrapper.addEventListener('click', this.toggleModal);
    }

    // componentDidUpdate() {
    //     this.initBatchWrapper(this.props.data);
    // }

    componentWillUnmount() {
        const batchWrapper = document.querySelector('.batch-wrapper');
        batchWrapper.removeEventListener('click', this.toggleModal);
    }

    toggleModal(e) {
        const target = e.target;

        const modalWrapper = document.body.querySelector('#modal-wrapper');                    
        if(modalWrapper.classList.contains('out')) {
            modalWrapper.classList.remove('out');
        } else {
            modalWrapper.classList.add('sketch');
        }

        if(target.tagName === "VIDEO") {
            stopBackgroundMusic();
        }
        initModalContent(e.target);
    }

    render() {
        return (
            <div className="batch-wrapper load-next"></div>
        );
    }

    initBatchWrapper(batchData) {
        const batchWrapper = document.querySelector('.batch-wrapper');
        batchWrapper.innerHTML = "";

        batchData.forEach((item, idx) => {
            const data = item.batchImg;
            
            const heroSection = document.createElement('div');
            heroSection.className = 'hero-section';
        
            if(data.type === 'image') {
                const img = document.createElement('img');
                img.className = 'img';
                img.src = data.imgPath;
                img.alt = "batch_img";

                heroSection.appendChild(img);

            } else if(data.type === 'video') {
                const video = document.createElement('video');
                video.className = 'video';
                video.src = data.imgPath;
                video.autoplay = "autoplay";
                video.muted = "muted";

                heroSection.appendChild(video);
            }
            
            batchWrapper.appendChild(heroSection);
            
            if(idx === 0) heroSection.classList.add('active');
            if(idx === batchData.length - 1) heroSection.classList.add('prev');
        });
    }
}

export default BatchWrapper;