import React, { Component } from 'react';

class BackgroundMusic extends Component {
    constructor(props) {
        super(props);

        this.playBackgroundMusic = playBackgroundMusic.bind(this);
        this.stopBackgroundMusic = stopBackgroundMusic.bind(this);
        this.volumeBackgroundMusic = volumeBackgroundMusic(this);
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
                    <i className="fas fa-volume-up"></i>
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
        const backgroundMusic = document.querySelector('.background-music .music');
        if(data.isExist) {
            const musicSource = backgroundMusic.querySelector('source');
            musicSource.src = data.musicPath;

            // at first not allowed autoplay music
            backgroundMusic.load();
            backgroundMusic.volume = 0.2;
            backgroundMusic.play();
            
        } else {
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
    // volume controller
}

export default BackgroundMusic;
export { playBackgroundMusic, stopBackgroundMusic, volumeBackgroundMusic }