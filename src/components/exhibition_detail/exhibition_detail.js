import React, { Component } from 'react';

import '../../style/exhibition_detail/exhibition_detail.scss';

import BackgroundMusic from './background_music';

import { api } from '../../api/online_gallery_api';

class ExhibitionDetail extends Component {
    constructor(props) {
        super(props);

        // 현재 진행중인 전시 인덱스
        this.detailIdx = 0;

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
                    {imgPath: '/sample_img/art_background.mp4', batchType: 'align', type: 'video', alignType: 'RC', vrImage: 'N', width: '120', height: '120'},
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
                    {batchType: 'align', type: 'image', alignType: 'TC', vrImage: 'N', width: '200', height: '60'},
                    batchNote:
                    {
                        boxWidth: 20, boxHeight: 60, boxBorderColor: null, boxBorderOpacity: null, boxBackgroundColor: '#ffffff', boxBackgroundColorOpacity: null, boxRadius: '10', boxAlign: 'LC',
                        caption:{author: 'kim, choi', title: 'artwork - 3', material: 'oil paint', size: '200 x 60', year: '2021', color: '#000000', opacity: '0.9'}
                    }
                },
            ],

            
            curBackgroundMusic: {}
        }
        
        this.initBackgroundMusic = this.initBackgroundMusic.bind(this);
    }

    async componentDidMount() {
        // data get async
        const response = await api.getDetailArtworks();

        // console.log(response);
        if(!response.isError) {
            const exhibition = response.data;
            this.setState({
                imgData: exhibition 
            });

            this.setState({
                curBackgroundMusic: this.state.batchData[0].backgroundMusic
            })
            
            this.initDot(3);
            this.initBackgroundImg(this.state.batchData[0].backgroundImg);
            this.initBackgroundMusic(0)

            this.showCurExhibition(this.detailIdx);

        } else {
            console.log('error');
        }
    }

    initBackgroundMusic(idx) {
        console.log(idx)
        this.setState({
            curBackgroundMusic: this.state.batchData[idx].backgroundMusic
        });
    }

    render() {
        return (
            <div className="exhibition-detail-wrapper">
                <BackgroundMusic
                data={this.state.curBackgroundMusic}
                ></BackgroundMusic>

                <div className="background-img"></div>

                <div className="batch-img">
                    <img className="img" src="/sample_img/artwork1.jpg" alt="batch_img"></img>
                </div>

                <div className="batch-note">
                    <div className="note-wrapper">
                        <div className="author">작가명</div>
                        <div className="title">제목명</div>
                        <div className="material">재료</div>
                        <div className="size">크기</div>
                        <div className="year">제작년도</div>
                    </div>
                </div>

                <div className="artwork-dot"></div>
            </div>
        );
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

        this.initBackgroundImg(this.state.batchData[idx].backgroundImg);
        this.initBackgroundMusic(idx)

        
        
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

    

    initBackgroundImg(data) {       // 백그라운드 이미지 생성
        const background = document.querySelector('.background-img');
        
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
            const backgroundVideo = document.createElement('div');
            

        }

    }
}

export default ExhibitionDetail;