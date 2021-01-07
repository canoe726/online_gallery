import React, { Component } from 'react';

class BackgroundMusic extends Component {
    constructor(props) {
        super(props);

        this.playBackgroundMusic = this.playBackgroundMusic.bind(this);
        this.stopBackgroundMusic = this.stopBackgroundMusic.bind(this);
    }

    componentDidMount() {
        this.initBackgroundMusic(this.props.data);
    }

    componentDidUpdate() {
        console.log('component updated!')
        this.initBackgroundMusic(this.props.data);
    }

    render() {
        return (
            <div className="background-music">
                <div className="turn-music-btn">
                    <i className="fas fa-volume-up"></i>
                </div>
                <div className="play-music-btn">
                    <i className="fas fa-play" onClick={this.playBackgroundMusic}></i>
                </div>
                <div className="stop-music-btn">
                    <i className="fas fa-stop" onClick={this.stopBackgroundMusic}></i>
                </div>

                <audio className="music">
                    <source type="audio/mpeg"/>
                </audio>
            </div>
        );
    }

    initBackgroundMusic(data) {     // 백그라운드 음악 재생
        const backgroundMusic = document.querySelector('.background-music .music');
        if(data.isExist) {
            const musicSource = backgroundMusic.querySelector('source');
            musicSource.src = data.musicPath;

            backgroundMusic.currentTime = 0;
            backgroundMusic.load();
            backgroundMusic.play();
        } else {
            backgroundMusic.pause();
        }
    }

    playBackgroundMusic() {
        const backgroundMusic = document.querySelector('.background-music .music');
        backgroundMusic.play();
    }

    stopBackgroundMusic() {
        const backgroundMusic = document.querySelector('.background-music .music');
        backgroundMusic.pause();
    }
    
    
}

export default BackgroundMusic;