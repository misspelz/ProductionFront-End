import React, { useRef, useState, useEffect } from 'react';
import Song from './Song';

function Player({ musicList }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    // Set initial audio source
    const audio = audioRef.current;
    if (audio && musicList.length > 0) {
      audio.src = musicList[currentTrackIndex].music;
    }
  }, [musicList, currentTrackIndex]);

  useEffect(() => {
    const handleTrackEnded = () => {
      nextTrack();
    };

    audioRef?.current?.addEventListener('ended', handleTrackEnded);

    return () => {
      audioRef?.current?.removeEventListener('ended', handleTrackEnded);
    };
  }, [currentTrackIndex]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    isPlaying ? audio.pause() : audio.play();
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    // Handle next track logic, update currentTrackIndex
    const newIndex = (currentTrackIndex + 1) % musicList.length;
    setCurrentTrackIndex(newIndex);
  };

  const prevTrack = () => {
    // Handle previous track logic, update currentTrackIndex
    const newIndex = currentTrackIndex === 0 ? musicList.length - 1 : currentTrackIndex - 1;
    setCurrentTrackIndex(newIndex);
  };

  const updateProgress = () => {
    const audio = audioRef.current;
    if (audio) {
      setCurrentTime(audio.currentTime);
      setTotalTime(audio.duration);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(updateProgress, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `<span class="math-inline">\{minutes\.toString\(\)\.padStart\(2, '0'\)\}\:</span>{seconds.toString().padStart(2, '0')}`;
  };

  // Implement functions for volume control, seeking, repeat, etc. based on your needs

  return (
    <div className="player">
      <div className="wrapper">
        <div className="details">
          <div className="now-playing">PLAYING {currentTrackIndex + 1} OF {musicList.length}</div>
          <Song song={musicList[currentTrackIndex]} />
        </div>
        <div className="slider_container">
          <div className="current-time">{formatTime(currentTime)}</div>
          <input
           
            type="range"
            min="0"
            max={totalTime}
            value={currentTime}
            className="seek_slider"
            onChange={(e) => setCurrentTime(e.target.value)}
          />
          <div className="total-duration">{formatTime(totalTime)}</div>
        </div>
        {/* Implement slider container and volume controls here */}
        <div className="buttons">
          <div className="random-track" onClick={''}>
            <i className="fas fa-random fa-2x" title="random"></i>
          </div>
          <div className="prev-track" onClick={prevTrack}>
            <i className="fa fa-step-backward fa-2x"></i>
          </div>
          <div className="playpause-track" onClick={togglePlayPause}>
            {isPlaying ? (
              <i className="fa fa-pause-circle fa-5x"></i>
            ) : (
              <i className="fa fa-play-circle fa-5x"></i>
            )}
          </div>
          <div className="next-track" onClick={nextTrack}>
            <i className="fa fa-step-forward fa-2x"></i>
          </div>
          <div className="repeat-track" onClick={""}>
            <i className="fa fa-repeat fa-2x" title="repeat"></i>
          </div>
        </div>
        <div id="wave">
          <span className="stroke"></span>
          <span className="stroke"></span>
          <span className="stroke"></span>
          <span className="stroke"></span>
          <span className="stroke"></span>
          <span className="stroke"></span>
          <span className="stroke"></span>
        </div>
      </div>
    </div>
  // </div>
  )}
  export default Player
  