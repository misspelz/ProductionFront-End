import React from 'react';

function Song({ song }) {
  return (
    <div className="track-art">
      <img src={song.img} alt={song.name} />
      <div className="track-name">{song.name}</div>
      <div className="track-artist">{song.artist}</div>
    </div>
  );
}

export default Song;
