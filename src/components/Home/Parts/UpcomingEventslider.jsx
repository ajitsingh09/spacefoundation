import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { cards } from "../../../dummydata";
import { IconButton } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const UpcomingEventslider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [slide, setSlide] = useState(0);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };
  const changeSlider = (value) => {
    console.log("slider changes");
    setSlide(value);
  };

  return (
    <>
      <Stack sx={{ overflowX: "hidden", width: 370, mr: 4 }}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{
            transform: `translateX(-${slide * 370}px) `,
            transition: "all 0.5s ease-in-out",
          }}
        >
          {cards.map((val, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                width: "370px",
              }}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(-1)}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "370px",
                  height: "250px",
                  backgroundColor:
                    hoveredIndex === index
                      ? "rgba(255, 205, 0, 0.7)"
                      : "transparent",
                  transition: "background-color 0.5s ease-out",
                  backgroundSize: hoveredIndex === index ? "contain" : "cover",
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
                  top: 100,
                  left: 160,
                  width: "50px",
                  height: "50px",
                  backgroundSize:
                    hoveredIndex === index ? "30px 30px" : "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  zIndex: 3,
                  backgroundImage:
                    hoveredIndex === index ? `url(${val.png})` : "block",
                  backgroundColor:
                    hoveredIndex === index ? "#ffffff" : "transparent",
                  cursor: "pointer",
                  borderRadius: "50%",
                }}
              />
              <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                height={"250px"}
                width={"370px"}
              >
                <img
                  src={val.cover}
                  alt="First Image"
                  width={"370px"}
                  height={"250px"}
                  style={{
                    position: "relative",
                    zIndex: 0,
                  }}
                />
              </Box>
              <Box pt={2} pr={2} pb={2}>
                <Stack gap={2}>
                  <Typography
                    fontSize={"18px"}
                    fontWeight={"bold"}
                    sx={{
                      cursor: "pointer",
                      "&:hover": {
                        color: "#ffcc00",
                      },
                    }}
                  >
                    {val.title}
                  </Typography>

                  <Stack gap={1}>
                    <Stack direction={"row"} gap={2}>
                      <CalendarMonthOutlinedIcon sx={{ color: "#ffcc00" }} />
                      <Typography color={"grey"}>
                        Start: {val.Start}
                      </Typography>{" "}
                    </Stack>
                    <Stack direction={"row"} gap={2}>
                      <CalendarMonthOutlinedIcon sx={{ color: "#ffcc00" }} />
                      <Typography color={"grey"}>
                        End: {val.End}
                      </Typography>{" "}
                    </Stack>
                    <Stack direction={"row"} gap={2}>
                      <EmailOutlinedIcon sx={{ color: "#ffcc00" }} />
                      <Typography color={"grey"}>
                        Address: {val.Address}
                      </Typography>{" "}
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          ))}
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <IconButton onClick={() => changeSlider(0)}>
            <CircleIcon
              color="secondary"
              sx={{
                transition: "all 0.3s ease-in-out",
                transform: slide === 0 ? "scale(1.3)" : "scale(1.0)",
                color: slide === 0 ? "#ffcc00" : "grey",
                fontSize: "15px",
              }}
            />
          </IconButton>
          <IconButton onClick={() => changeSlider(1)}>
            <CircleIcon
              color="secondary"
              sx={{
                transition: "all 0.3s ease-in-out",
                transform: slide === 1 ? "scale(1.3)" : "scale(1.0)",
                color: slide === 1 ? "#ffcc00" : "grey",
                fontSize: "15px",
              }}
            />
          </IconButton>
          <IconButton onClick={() => changeSlider(2)}>
            <CircleIcon
              color="secondary"
              sx={{
                transition: "all 0.3s ease-in-out",
                transform: slide === 2 ? "scale(1.3)" : "scale(1.0)",
                color: slide === 2 ? "#ffcc00" : "grey",
                fontSize: "15px",
              }}
            />
          </IconButton>
          <IconButton onClick={() => changeSlider(3)}>
            <CircleIcon
              color="secondary"
              sx={{
                transition: "all 0.3s ease-in-out",
                transform: slide === 3 ? "scale(1.3)" : "scale(1.0)",
                color: slide === 3 ? "#ffcc00" : "grey",
                fontSize: "15px",
              }}
            />
          </IconButton>
          <IconButton onClick={() => changeSlider(4)}>
            <CircleIcon
              color="secondary"
              sx={{
                transition: "all 0.3s ease-in-out",
                transform: slide === 4 ? "scale(1.3)" : "scale(1.0)",
                color: slide === 4 ? "#ffcc00" : "grey",
                fontSize: "15px",
              }}
            />
          </IconButton>
          <IconButton onClick={() => changeSlider(5)}>
            <CircleIcon
              color="secondary"
              sx={{
                transition: "all 0.3s ease-in-out",
                transform: slide === 5 ? "scale(1.3)" : "scale(1.0)",
                color: slide === 5 ? "#ffcc00" : "grey",
                fontSize: "15px",
              }}
            />
          </IconButton>
        </Stack>
      </Stack>
    </>
  );
};

export default UpcomingEventslider;
