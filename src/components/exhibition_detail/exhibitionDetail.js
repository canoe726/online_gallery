import React, { Component } from 'react';

import '../../style/exhibition_detail/exhibitionDetail.scss';

import BackgroundMusic from './backgroundMusic';
import BackgroundWrapper from './backgroundWrapper';
import BatchWrapper from './batchWrapper';
import BatchNote from './batchNote';
import ModalWrapper from './modalWrapper';

import { api } from '../../api/onlineGalleryApi';

class ExhibitionDetail extends Component {
    constructor(props) {
        super(props);

        this.throttler = undefined;
        this.detailIdx = 0;         // 현재 진행중인 전시 인덱스
        
        this.wheelChangeExhibition = this.wheelChangeExhibition.bind(this);
        // this.initExhibitionDetailData = this.initExhibitionDetailData(this);

        this.initBackgroundMusic = this.initBackgroundMusic.bind(this);
        this.initBatchNote = this.initBatchNote.bind(this);

        this.state = {
            intro: {
                title: "Online Gallery",
                contents: "Exhibition #1",
                date: "2021.01.15",
                backgroundType: "image",
                backgroundImgPath: "/sample_img/artwork_d_3.jpg",
                coworker: ['김영배','김의석','이원기']
            },
            imgData: [],
            batchData: [
                {
                    backgroundMusic: {isExist: true, musicPath: '/sample_img/background_music1.mp3'},
                    backgroundImg:
                    {type: 'image', opacity: '0.5', imgPath: '/sample_img/artwork_d_1.jpg', backgroundColor: null, imgBlur: 'Y'},
                    batchImg:
                    {imgPath: '/sample_img/artwork_d_2.jpg', batchType: 'full', type: 'image', alignType: 'C', vrImage: 'N', width: '30', height: '100'},
                    batchNote:
                    {
                        boxWidth: 40, boxHeight: 30, boxBorderColor: null, boxBorderOpacity: null, boxBackgroundColor: '#ffffff', boxBackgroundColorOpacity: null, boxRadius: '10', boxAlign: 'LC',
                        caption:{comment: 'artwork 1 is drawn oil paint and the author name is kim who is famous field in oil paint', author: 'kim', title: 'artwork - 1', material: 'oil paint', size: '30 x 100', year: '2021', color: '#000000', opacity: '0.9'}
                    }
                },
                {
                    backgroundMusic: {isExist: true, musicPath: '/sample_img/background_music2.mp3'},
                    backgroundImg:
                    {type: 'color', opacity: '0.8', imgPath: null, backgroundColor: '#15942365', imgBlur: null},
                    batchImg:
                    {imgPath: '/sample_img/art_gallery.mp4', batchType: 'align', type: 'video', alignType: 'RC', vrImage: 'N', width: '120', height: '120'},
                    batchNote:
                    {
                        boxWidth: 30, boxHeight: 60, boxBorderColor: null, boxBorderOpacity: null, boxBackgroundColor: '#000000', boxBackgroundColorOpacity: null, boxRadius: '5', boxAlign: 'RB',
                        caption:{comment: 'artwork 2 is made of 2 authors who are kim and lee, and this is drawn by water paint.', author: 'kim, lee', title: 'artwork - 2', material: 'water paint', size: '120 x 120', year: '2021', color: '#000000', opacity: '1.0'}
                    }
                },
                {
                    backgroundMusic: {isExist: false, musicPath: ''},
                    backgroundImg:
                    {type: 'video', opacity: null, imgPath: '/sample_img/art_background.mp4', backgroundColor: null, imgBlur: 'N'},
                    batchImg:
                    {imgPath: '/sample_img/artwork_d_3.jpg', batchType: 'align', type: 'image', alignType: 'TC', vrImage: 'N', width: '200', height: '60'},
                    batchNote:
                    {
                        boxWidth: 20, boxHeight: 60, boxBorderColor: null, boxBorderOpacity: null, boxBackgroundColor: '#ffffff', boxBackgroundColorOpacity: null, boxRadius: '10', boxAlign: 'LC',
                        caption:{comment: 'artwork 3 is made of 2 authors who are kim and choi, and this is drawn by oil paint. Online gallery launched at first this artwork.', author: 'kim, choi', title: 'artwork - 3', material: 'oil paint', size: '200 x 60', year: '2021', color: '#000000', opacity: '0.9'}
                    }
                },
            ],
            curBackgroundMusic: {},
            curBackgroundImg: {},
            curBatchImg: {},
            curBatchNote: {},
            curExhibitionDetail: {},
        }
    }

    componentDidMount() {
        // data get async
        // this.initExhibitionDetailData(idx);

        // 휠로 다음페이지 전환
        const backgroundImg = document.querySelector('.background-wrapper');
        backgroundImg.addEventListener('wheel', this.wheelChangeExhibition);

        // 첫 번째 그림으로 디테일 페이지를 보여줌
        this.initDot(this.state.batchData.length);

        // 현재 보여지는 전시를 바꿈
        this.showCurExhibition(this.detailIdx);
    }

    componentWillUnmount() {
        const artworkDots = document.querySelectorAll('.artwork-dot .dot');
        artworkDots.forEach((dot, idx) => {
            dot.removeEventListener('click', e => {
                this.wheelChangeExhibition(e);
            });
        });

        // 휠로 다음페이지 전환
        const backgroundImg = document.querySelector('.background-wrapper');
        backgroundImg.removeEventListener('wheel', this.wheelChangeExhibition);
    }

    render() {
        return (
            <div className="exhibition-detail-wrapper">
                <BackgroundMusic
                data={this.state.curBackgroundMusic}
                ></BackgroundMusic>

                <BackgroundWrapper
                data={this.state.batchData}
                ></BackgroundWrapper>

                <BatchWrapper
                data={this.state.batchData}
                ></BatchWrapper>

                <BatchNote
                data={this.state.curBatchNote}
                ></BatchNote>

                <div className="artwork-dot"></div>

                <ModalWrapper
                data={this.state.curBatchImg}
                ></ModalWrapper>
            </div>
        );
    }

    wheelChangeExhibition(e) {
        if(!this.throttler) {
            this.throttler = setTimeout(() => {
                let isScrollUp = false;
                if(e.deltaY < 0) isScrollUp = true;    

                const length = this.state.batchData.length;
                const backgroundWrapper = document.querySelector('.background-wrapper');
                const backgroundItems = document.querySelectorAll('.background-wrapper .hero-section');
                
                const batchWrapper = document.querySelector('.batch-wrapper');
                const batchWrapperItems = document.querySelectorAll('.batch-wrapper .hero-section');

                if(isScrollUp) {        // 이전 전시
                    this.scrollUpAnimation(backgroundWrapper, backgroundItems, this.detailIdx, length);
                    this.scrollUpAnimation(batchWrapper, batchWrapperItems, this.detailIdx, length);

                    this.detailIdx -= 1;
                    if(this.detailIdx < 0) this.detailIdx = length - 1;

                } else {                // 다음 전시
                    this.scrollDownAnimation(backgroundWrapper, backgroundItems, this.detailIdx, length);
                    this.scrollDownAnimation(batchWrapper, batchWrapperItems, this.detailIdx, length);

                    this.detailIdx += 1;
                    if(this.detailIdx >= length) this.detailIdx = 0;
                }

                // change cur exhibition
                this.showCurExhibition(this.detailIdx);
                this.throttler = undefined;
            }, 400);
        }
    }

    scrollUpAnimation(wrapper, element, idx, length) {
        let before = idx - 1;
        let next = idx + 1;

        wrapper.classList.add('load-prev');
        wrapper.classList.remove('load-next');

        if(before < 0) before = length - 1;
        if(next > length - 1) next = 0;

        element[before].classList.add('active');
        element[before].classList.remove('prev');

        element[idx].classList.add('prev');
        element[idx].classList.remove('active');

        element[next].classList.remove('prev');
        element[next].classList.remove('active');
    }

    scrollDownAnimation(wrapper, element, idx, length) {
        let before = idx - 1;
        let next = idx + 1;

        wrapper.classList.add('load-next');
        wrapper.classList.remove('load-prev');

        if(before < 0) before = length - 1;
        if(next > length - 1) next = 0;

        element[before].classList.remove('prev');
        element[before].classList.remove('active');

        element[idx].classList.add('prev');
        element[idx].classList.remove('active');

        element[next].classList.add('active');
        element[next].classList.remove('prev');
    }

    initDot(length) {           // 하단 dot 생성
        const artworkDot = document.querySelector('.artwork-dot');
        for(let idx=0; idx<length; idx++) {
            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.dataset.id = idx;
            dot.addEventListener('click', e => {
                this.wheelChangeExhibition(e);
            });
            artworkDot.appendChild(dot);
        }
    }

    async initExhibitionDetailData(idx) {
        const response = await api.getExhibitionById(idx);
        if(!response.isError) {
            this.setState({
                curExhibitionDetail: response
            });
        } else {
            // error page
        }
    }
    
    initBackgroundMusic(idx) {
        this.setState({
            curBackgroundMusic: this.state.batchData[idx].backgroundMusic
        });
    }    

    initBatchNote(idx) {
        this.setState({
            curBatchNote: this.state.batchData[idx].batchNote
        });
    }

    showCurExhibition(idx) {
        // change dot active
        const dots = document.querySelectorAll('.dot');
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        dots[idx].classList.add('active');

        // change background
        this.initBackgroundMusic(idx);

        // change batch
        this.initBatchNote(idx);
    }    
}

export default ExhibitionDetail;