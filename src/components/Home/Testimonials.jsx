import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { testi } from "../../dummydata";
import EjectIcon from "@mui/icons-material/Eject";
const Testimonial = () => {
  const [isHovered, setIsHovered] = useState(false);

  const HandleHover = (index) => {
    setIsHovered(index);
  };

  return (
    <>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        width={"100%"}
        height={"100vh"}
        gap={"40px"}
        sx={{  paddingTop: "10%", backgroundColor:"black", opacity:"0.5" }}
      >
        {testi.map((val, index) => (
          <Box display={"flex"}>
            <Box display={"flex"} flexDirection={"column"} gap={"40px"}>
              <Box display={"flex"} flexDirection={"row"} gap={"10px"}>
                <Box width={"40%"} display={"flex"} justifyContent={"right"}>
                  <img
                    src={val.cover}
                    alt="First Image"
                    width={"70px"}
                    height={"70px"}
                    style={{
                      position: "relative",
                      zIndex: 0,
                      borderRadius: "50%",
                    }}
                  />
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  color={"white"}
                  justifyContent={"center"}
                >
                  <Typography variant="h5">{val.Title}</Typography>
                  <Typography>{val.desi}</Typography>
                </Box>
              </Box>
              <Box
                onMouseEnter={() => HandleHover(index)}
                onMouseLeave={() => HandleHover(-1)}
                key={val.id}
                sx={{
                  width: "350px",
                  height: "180px",
                  zIndex: "0",
                  position: "relative",
                  border: "2px solid #dbdbd9",
                  "&:hover": {
                    border: "2px solid #ffcd00",
                  },
                }}
              >
                <Box
                  position={"absolute"}
                  sx={{
                    top: -19,
                    left: "35%",
                  }}
                >
                  <EjectIcon
                    sx={{
                      color: isHovered === index ? "#ffcd00" : "#dbdbd9",
                    }}
                  />
                </Box>
                <Stack height={"100%"} p={"20px"}>
                  <Box height={"50%"}>
                    <Typography fontSize={"18px"} color={"white"}>
                      {val.bigdes}
                    </Typography>
                  </Box>
                  <Box
                    width={"300px"}
                    height={"50%"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"right"}
                  >
                    <img
                      src={val.quote}
                      style={{ width: "40px", height: "30px" }}
                      alt=""
                    />
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default Testimonial;
