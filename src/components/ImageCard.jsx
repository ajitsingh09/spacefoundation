import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const ImageCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
  console.log(data, "data");
  return (
    <Box
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: 290,
        backgroundImage: `url(${data?.cover})`,
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 204, 0,0.8)",
          opacity: isHovered ? 1 : 0,
          transition: "all 0.5s ease",
          cursor: "pointer",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            backgroundColor: "white",
            borderRadius: "50%",
            width: "120px",
            height: "120px",
          }}
        >
          <img
            className="fade-in-animation"
            src={data?.png}
            alt="img"
            style={{ width: "80px", height: "80px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ImageCard;
