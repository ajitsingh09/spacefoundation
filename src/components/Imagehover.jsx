import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { hover } from "../dummydata";

const MyComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <>
      {hover.map((val) => (
        <Box
          sx={{
            width: "585px",
            height: "272px",
            zIndex: "0",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "585px",
              height: "272px",
            }}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "585px",
                height: "272px",
                backgroundColor: isHovered
                  ? "rgba(255, 205, 0, 0.7)"
                  : "transparent",
                transition: "background-color 0.5s ease-out",
                backgroundSize: isHovered ? "contain" : "cover",
                cursor: "pointer",
                backgroundPosition: "center",
                zIndex: 2,
              }}
            />
            <Box
              sx={{
                position: "absolute",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                top: "calc(75% - 25px)",
                left: "calc(100% - 55px)",
                width: "50px",
                height: "50px",
                backgroundSize: isHovered ? "30px 30px" : "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                zIndex: 3,
                backgroundImage: isHovered ? `url(${val.png})` : "block",
                backgroundColor: isHovered ? "#ffffff" : "transparent",
                cursor: "pointer",
                borderRadius: "50%",
              }}
            />
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              height={"272px"}
              width={"585px"}
            >
              <img
                src={val.cover}
                alt="First Image"
                width={"756px"}
                height={"272px"}
                style={{
                  position: "relative",
                  zIndex: 0,
                }}
              />
            </Box>
          </Box>
          <Box>
            <Typography variant="h2">{val.Date}</Typography>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default MyComponent;
