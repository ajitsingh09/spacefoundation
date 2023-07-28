import React, { useState } from "react";
import ReactPlayer from "react-player";
import img from "../../../assets/img.jpg";
import { Box } from "@mui/system";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div>
      {!isPlaying && (
        <div
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onClick={handlePlay}
          style={{
            margin: "100px 0 0 0",
            position: "relative",
          }}
        >
          <img
            src={img}
            alt="Thumbnail"
            style={{ width: "600px", height: "450px" }}
          />
          <div className="play-button-overlay">
            <i className="fa fa-play"></i>
          </div>
          <Box
            sx={{
              position: "absolute",
              width: 600,
              height: 450,
              top: 0,
              transition: "all 0.5s ease",
              opacity: isHovering ? 0.5 : 0,
              backgroundColor: "black",
            }}
          />
        </div>
      )}

      {isPlaying && (
        <div
          onClick={handlePlay}
          style={{
            padding: "100px 0 0 0",
          }}
        >
          <ReactPlayer
            url={"https://youtu.be/LSRNmhLS76o"}
            controls
            playing
            width="600px"
            height="450px"
            pip={true}
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
