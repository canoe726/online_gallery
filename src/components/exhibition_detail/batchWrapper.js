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

    componentDidUpdate() {
        this.initBatchWrapper(this.props.data);
    }

    componentWillUnmount() {
        const batchWrapper = document.querySelector('.batch-wrapper');
        batchWrapper.removeEventListener('click', this.toggleModal);
    }

    toggleModal() {
        const modalWrapper = document.body.querySelector('#modal-wrapper');                    
        if(modalWrapper.classList.contains('out')) {
            modalWrapper.classList.remove('out');
        } else {
            modalWrapper.classList.add('sketch');
        }

        if(this.props.data.type === "video") {
            stopBackgroundMusic();
        }
        initModalContent(this.props.data);
    }

    render() {
        return (
            <div className="batch-wrapper"></div>
        );
    }

    initBatchWrapper(data) {
        const batchWrapper = document.querySelector('.batch-wrapper');
        batchWrapper.innerHTML = "";
        
        if(data.type === 'image') {
            const img = document.createElement('img');
            img.className = 'img';
            img.src = data.imgPath;
            img.alt = "batch_img";

            batchWrapper.appendChild(img);

        } else if(data.type === 'video') {
            const video = document.createElement('video');
            video.className = 'video';
            video.src = data.imgPath;
            video.autoplay = "autoplay";
            video.muted = "muted";

            batchWrapper.appendChild(video);
        }
    }
}

export default BatchWrapper;