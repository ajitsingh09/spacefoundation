import React, { useState } from "react";
import ReactPlayer from "react-player";
import img from "../../../assets/img.jpg";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div>
      {!isPlaying && (
        <div onClick={handlePlay}>
          <img
            src={img}
            alt="Thumbnail"
            style={{ width: "600PX", padding: "100px 0 0 0" }}
          />
          <div className="play-button-overlay">
            <i className="fa fa-play"></i>
          </div>
        </div>
      )}

      {isPlaying && (
        <ReactPlayer
          url={"https://youtu.be/LSRNmhLS76o"}
          controls
          playing
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
};

export default VideoPlayer;
