import React, { Component } from 'react';

class BackgroundMusic extends Component {
    constructor(props) {
        super(props);

        this.playBackgroundMusic = playBackgroundMusic.bind(this);
        this.stopBackgroundMusic = stopBackgroundMusic.bind(this);
        this.volumeBackgroundMusic = volumeBackgroundMusic.bind(this);
    }

    componentDidMount() {
        this.initBackgroundMusic(this.props.data);
    }

    componentDidUpdate() {
        this.initBackgroundMusic(this.props.data);
    }

    render() {
        return (
            <div className="background-music">
                <div className="turn-music-btn">
                    <i className="fas fa-volume-up" onClick={this.volumeBackgroundMusic}></i>
                </div>
                <div className="play-music-btn">
                    <i className="fas fa-play" onClick={this.playBackgroundMusic}></i>
                </div>
                <div className="stop-music-btn">
                    <i className="fas fa-stop" onClick={this.stopBackgroundMusic}></i>
                </div>

                <audio className="music" >
                    <source type="audio/mpeg"/>
                </audio>
            </div>
        );
    }

    initBackgroundMusic(data) {     // 백그라운드 음악 재생
        const backgroundMusicWrapper = document.querySelector('.background-music');
        const backgroundMusic = document.querySelector('.background-music .music');
        if(data.isExist) {
            if(data.musicPath.length === 0) {
                backgroundMusicWrapper.classList.add('hidden');
                return;
            }
            if(backgroundMusicWrapper.classList.contains('hidden')) {
                backgroundMusicWrapper.classList.remove('hidden');
            }

            const musicSource = backgroundMusic.querySelector('source');
            musicSource.src = data.musicPath;

            // at first not allowed autoplay music
            backgroundMusic.load();
            backgroundMusic.volume = 0.15;
            backgroundMusic.play();
            
        } else {
            backgroundMusicWrapper.classList.add('hidden');
            backgroundMusic.pause();
        }
    }
}

function playBackgroundMusic() {
    const backgroundMusic = document.querySelector('.background-music .music');
    backgroundMusic.play();
}

function stopBackgroundMusic() {
    const backgroundMusic = document.querySelector('.background-music .music');
    backgroundMusic.pause();
}

function volumeBackgroundMusic() {
    const backgroundMusic = document.querySelector('.background-music .music');
    const curVolume = backgroundMusic.volume;
    if(curVolume === 0.15) {
        backgroundMusic.volume = 0.075;
    } else if(curVolume === 0.075) {
        backgroundMusic.volume = 0.03;
    } else if(curVolume === 0.03) {
        backgroundMusic.volume = 0.15;
    } 
}

export default BackgroundMusic;
export { playBackgroundMusic, stopBackgroundMusic, volumeBackgroundMusic }