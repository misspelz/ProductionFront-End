import React, { useState, useEffect, useRef } from 'react';
import "./player.css"
import { GiPreviousButton } from 'react-icons/gi';
import { BiChevronDown, BiDownArrow, BiDownload, BiPause, BiPlay } from 'react-icons/bi';
import { BsForward } from 'react-icons/bs';
import { FaForward } from 'react-icons/fa';
import { MdMoreVert } from 'react-icons/md';
import axios from 'axios';

const MusicPlayer2 = () => {
  const [state, setState] = useState({
    index: 3,
    currentTime: '0:00',
    musicList: [
      {
        name: 'Nice piano and ukulele',
        author: 'Royalty',
        img: 'https://www.bensound.com/bensound-img/buddy.jpg',
        audio: 'https://www.bensound.com/bensound-music/bensound-buddy.mp3',
        duration: '2:02'
      },
      {
        name: 'Gentle acoustic',
        author: 'Acoustic',
        img: 'https://www.bensound.com/bensound-img/sunny.jpg',
        audio: 'https://www.bensound.com//bensound-music/bensound-sunny.mp3',
        duration: '2:20'
      },
      {
        name: 'Corporate motivational',
        author: 'Corporate',
        img: 'https://www.bensound.com/bensound-img/energy.jpg',
        audio: 'https://www.bensound.com/bensound-music/bensound-energy.mp3',
        duration: '2:59'
      },
      {
        name: 'Slow cinematic',
        author: 'Royalty',
        img: 'https://www.bensound.com/bensound-img/slowmotion.jpg',
        audio: 'https://www.bensound.com/bensound-music/bensound-slowmotion.mp3',
        duration: '3:26'
      }
    ],
    pause: false
  });

  const playerRef = useRef(null);
  const timelineRef = useRef(null);
  const playheadRef = useRef(null);
  const hoverPlayheadRef = useRef(null);
  const [songs, setSongs] = useState([])
  const [Afrobeats, setAfrobeats] = useState([])
  const authToken = localStorage.getItem("authToken")

  const GetSongs = () => {
    axios
      .get(`https://development.2geda.net/api/stereo/songs/`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "X-CSRFToken": process.env.REACT_TOKEN,
        },
      })
      .then((res) => {
        setSongs(res?.data?.data);
        setState((prevState)=>({
            ...prevState,
            musicList: res.data.data
        }))
        console.log(songs + "songs state===");
        console.log(JSON.stringify(res.data) + "songs====");

        // Afrobeats

        // Filter the items where plays < 3
        const afroHits = res?.data?.data.filter((item) => item.category.name === "Afro beats");
        // Assuming setBigHit is a function to update state
        setAfrobeats(afroHits);
        console.log(afroHits,"afrohits");
      }).catch(e=>console.log(e));
  };

  const handleDownload = ({fileUrl, fileName}) => {
    fetch(fileUrl)
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      })
      .catch(error => {
        console.error('Error downloading file:', error);
      });
  };


  useEffect(()=>{
    GetSongs()
    console.log(currentSong?.audio_file, "wertyuiop")
  },[])


  useEffect(() => {
    const player = playerRef.current;
    const timeline = timelineRef.current;
    const playhead = playheadRef.current;

    player.addEventListener("timeupdate", timeUpdate, false);
    player.addEventListener("ended", nextSong, false);
    timeline.addEventListener("click", changeCurrentTime, false);
    timeline.addEventListener("mousemove", hoverTimeLine, false);
    timeline.addEventListener("mouseout", resetTimeLine, false);

    return () => {
      player.removeEventListener("timeupdate", timeUpdate);
      player.removeEventListener("ended", nextSong);
      timeline.removeEventListener("click", changeCurrentTime);
      timeline.removeEventListener("mousemove", hoverTimeLine);
      timeline.removeEventListener("mouseout", resetTimeLine);
    };
  }, []);

  const changeCurrentTime = (e) => {
    const duration = playerRef.current.duration;
    const playheadWidth = timelineRef.current.offsetWidth;
    const offsetWidth = timelineRef.current.offsetLeft;
    const userClickWidth = e.clientX - offsetWidth;
    const userClickWidthInPercent = (userClickWidth * 100) / playheadWidth;

    playheadRef.current.style.width = userClickWidthInPercent + "%";
    playerRef.current.currentTime = (duration * userClickWidthInPercent) / 100;
  };

  const hoverTimeLine = (e) => {
    const duration = playerRef.current.duration;
    const playheadWidth = timelineRef.current.offsetWidth;
    const offsetWidth = timelineRef.current.offsetLeft;
    const userClickWidth = e.clientX - offsetWidth;
    const userClickWidthInPercent = (userClickWidth * 100) / playheadWidth;

    if (userClickWidthInPercent <= 100) {
      hoverPlayheadRef.current.style.width = userClickWidthInPercent + "%";
    }

    const time = (duration * userClickWidthInPercent) / 100;

    if (time >= 0 && time <= duration) {
      hoverPlayheadRef.current.dataset.content = formatTime(time);
    }
  };

  const resetTimeLine = () => {
    hoverPlayheadRef.current.style.width = 0;
  };

  const timeUpdate = () => {
    const duration = playerRef.current.duration;
    const timelineWidth = timelineRef.current.offsetWidth - playheadRef.current.offsetWidth;
    const playPercent = 100 * (playerRef.current.currentTime / duration);
    playheadRef.current.style.width = playPercent + "%";
    const currentTime = formatTime(parseInt(playerRef.current.currentTime));
    setState((prevState) => ({
      ...prevState,
      currentTime
    }));
  };

  const formatTime = (currentTime) => {
    const minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime % 60);

    seconds = seconds >= 10 ? seconds : "0" + seconds % 60;

    return minutes + ":" + seconds;
  };

  const updatePlayer = () => {
    const { musicList, index } = state;
    const currentSong = musicList[index];
    const audio = new Audio(currentSong.audio_file);
    playerRef.current.load();
  };

  const nextSong = () => {
    const { musicList, index, pause } = state;

    setState((prevState) => ({
      ...prevState,
      index: (index + 1) % musicList.length
    }));
    updatePlayer();
    if (pause) {
      playerRef.current.play();
    }
  };

  const prevSong = () => {
    const { musicList, index, pause } = state;

    setState((prevState) => ({
      ...prevState,
      index: (index + musicList.length - 1) % musicList.length
    }));
    updatePlayer();
    if (pause) {
      playerRef.current.play();
    }
  };

  const playOrPause = () => {
    const { pause } = state;

    if (!pause) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
    setState((prevState) => ({
      ...prevState,
      pause: !pause
    }));
  };

  const clickAudio = (key) => {
    const { pause } = state;

    setState((prevState) => ({
      ...prevState,
      index: key
    }));

    updatePlayer();
    if (pause) {
      playerRef.current.play();
    }
  };

  const { musicList, index, currentTime, pause } = state;
  const currentSong = musicList[index];

  return (
    <div className="car overflow-x-hidden w-auto container">
        <div className='flex justify-between items-center mb-10'>
            <button className='w-[24] h-[24]'><BiChevronDown size={24}/></button>
            <button className='w-[24] h-[24]'><MdMoreVert size={24}/></button>
        </div>
      <div className="current-song">
        {console.log(currentSong?.audio_file, "..,,.,/;''[]===")}
        <audio ref={playerRef}>
          <source src={currentSong?.audio_file} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <div className="img-wra relative w-full h-[200px] overflow-hidden">
          <img src={currentSong?.cover_image} alt={currentSong?.title} className='w-full h-full' />
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex flex-col'>
        <span className="song-name">{currentSong?.title}</span>
        <span className="song-autor">{currentSong?.artist?.artist_name}</span>
        </div>
        <button>
            
            <a href={currentSong?.audio_file} download target="_blank"><BiDownload color='#4F0DA3' size={23}/></a>
        </button>
        </div>

        <div style={{backgroundImage: "linear-gradient(#4F0DA3, #FF8A15);" }} className='bg-down rounded-t-3xl px-4 mt-4'>

        <div ref={timelineRef} id="timeline" className='mt-4'>
          <div ref={playheadRef} id="playhead"></div>
          <div ref={hoverPlayheadRef} className="hover-playhead" data-content="0:00"></div>
        </div>
        <div className="time">
          <div className="current-tim text-white">{currentTime}</div>
          <div className="end-time text-white">{currentSong?.duration}</div>
        </div>

        <div className="controls">
          <button onClick={prevSong} className="prev prev-next current-btn">
            {/* <i className="fas fa-backward"></i> */}
            <GiPreviousButton color='white'/>
          </button>

          <button onClick={playOrPause} className="play current-btn items-center self-center bg-white">
            {!pause ? <BiPlay size={40} className='flex items-center self-center'/> : <BiPause size={40}/>}
          </button>
          <button onClick={nextSong} className="next prev-next current-btn">
            {/* <i className="fas fa-forward"></i> */}
            <FaForward color='white'/>
          </button>
        </div>
      </div>
      </div>
      {/* <div className="play-list">
        {musicList.map((music, key) => (
          <div
            key={key}
            onClick={() => clickAudio(key)}
            className={`track ${index === key && !pause ? 'current-audio' : ''} ${
              index === key && pause ? 'play-now' : ''
            }`}
          >
            <img className="track-img" src={music.img} alt={music.name} />
            <div className="track-discr">
              <span className="track-name">{music.name}</span>
              <span className="track-author">{music.author}</span>
            </div>
            <span className="track-duration">{index === key ? currentTime : music.duration}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default MusicPlayer2;
