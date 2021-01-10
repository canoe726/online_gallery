import React, { Component } from 'react';

import '../../style/exhibition_detail/exhibition_detail.scss';

import BackgroundMusic from './background_music';
import BackgroundWrapper from './background_wrapper';
import BatchWrapper from './batch_wrapper';
import BatchNote from './batch_note';

import { api } from '../../api/online_gallery_api';

class ExhibitionDetail extends Component {
    constructor(props) {
        super(props);

        // 현재 진행중인 전시 인덱스
        this.detailIdx = 0;
        this.initBackgroundMusic = this.initBackgroundMusic.bind(this);
        this.initBackgroundImg = this.initBackgroundImg.bind(this);
        this.initBatchImg = this.initBatchImg.bind(this);
        this.initBatchNote = this.initBatchNote.bind(this);

        this.state = {
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
                        caption:{author: 'kim', title: 'artwork - 1', material: 'oil paint', size: '30 x 100', year: '2021', color: '#000000', opacity: '0.9'}
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
                        caption:{author: 'kim, lee', title: 'artwork - 2', material: 'water paint', size: '120 x 120', year: '2021', color: '#000000', opacity: '1.0'}
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
                        caption:{author: 'kim, choi', title: 'artwork - 3', material: 'oil paint', size: '200 x 60', year: '2021', color: '#000000', opacity: '0.9'}
                    }
                },
            ],
            curBackgroundMusic: {},
            curBackgroundImg: {},
            curBatchImg: {},
            curBatchNote: {},
        }
    }

    componentDidMount() {
        // data get async
        // const response = await api.getDetailArtworks();
        // if(!response.isError) {
        //     const exhibition = response.data;
            
        //     this.initDot(3);
        //     this.initBackgroundImg(this.state.batchData[0].backgroundImg);
        //     this.initBackgroundMusic(0)

        //     this.showCurExhibition(this.detailIdx);

        // } else {
        //     console.log('error');
        // }

        this.initDot(this.state.batchData.length);
        this.initBackgroundImg(0);
        this.initBackgroundMusic(0)

        this.showCurExhibition(this.detailIdx);
    }

    render() {
        return (
            <div className="exhibition-detail-wrapper">
                <BackgroundMusic
                data={this.state.curBackgroundMusic}
                ></BackgroundMusic>

                <BackgroundWrapper
                data={this.state.curBackgroundImg}
                ></BackgroundWrapper>

                <BatchWrapper
                data={this.state.curBatchImg}
                ></BatchWrapper>

                <BatchNote
                data={this.state.curBatchNote}
                ></BatchNote>

                <div className="artwork-dot"></div>

                <div id="modal-wrapper">
                    <div class="modal-background">
                        <div class="modal">
                            <svg class="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                                <rect x="0" y="0" fill="none" width="900" height="500" rx="10" ry="10"></rect>
                            </svg>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }

    initDot(length) {           // 하단 dot 생성
        const artworkDot = document.querySelector('.artwork-dot');
        for(let idx=0; idx<length; idx++) {
            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.addEventListener('click', () => {
                this.showCurExhibition(idx);
            });
            artworkDot.appendChild(dot);
        }
    }
    
    initBackgroundMusic(idx) {
        this.setState({
            curBackgroundMusic: this.state.batchData[idx].backgroundMusic
        });
    }

    initBackgroundImg(idx) {
        this.setState({
            curBackgroundImg: this.state.batchData[idx].backgroundImg
        });
    }

    initBatchImg(idx) {
        this.setState({
            curBatchImg: this.state.batchData[idx].batchImg
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
        const backgroundImage = document.querySelector('.background-img')
        backgroundImage.innerHTML = '';

        this.initBackgroundMusic(idx);
        this.initBackgroundImg(idx);

        // change batch
        this.initBatchImg(idx);
        this.initBatchNote(idx);
    }    
}

export default ExhibitionDetail;