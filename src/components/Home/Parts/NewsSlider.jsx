import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { news } from "../../../dummydata";
import Button from "../../utils/Button";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

const NewsSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <>
      {news.map((val, index) => (
        <Box
          key={val.id}
          sx={{
            minWidth: { xs: "95vw", sm: "45vw", md: "30vw" },
          }}
          px={{ xs: 1, md: 2 }}
        >
          <Box
            sx={{
              minWidth: "100%",
              height: "500px",
              zIndex: "0",
              border: "1px solid #dbdbd9",
              "&:hover": {
                border: "1px solid #ffcd00",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "200px",
              }}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(-1)}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "200px",
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
                  top: "calc(50% - 25px)",
                  left: "calc(50% - 25px)",
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
                height={"200px"}
                width={"100%"}
              >
                <img
                  src={val.cover}
                  alt="First Image"
                  width={"100%"}
                  height={"200px"}
                  style={{
                    position: "relative",
                    zIndex: 0,
                  }}
                />
              </Box>
              <Stack p={4}>
                <Box display="flex" flexDirection="column" rowGap="19px">
                  <Box display={"flex"} flexDirection={"column"} gap={"20px"}>
                    <Box display={"flex"} flexDirection={"row"} gap={"5px"}>
                      <CalendarMonthOutlinedIcon sx={{ color: "#ffcc00" }} />
                      <Typography
                        fontSize={"15px"}
                        fontWeight={"bold"}
                        color={"grey"}
                      >
                        {val.date}
                      </Typography>
                    </Box>
                    <Typography fontWeight="bold" fontSize={"18px"}>
                      {val.Title}
                    </Typography>
                    <Typography
                      fontSize={"14.5px"}
                      color={"grey"}
                      // lineHeight={1.5}
                      letterSpacing={"0.3px"}
                    >
                      {val.des}
                    </Typography>
                    <Button
                      sx={{
                        width: "50%",
                        color: "black",
                        backgroundColor: "#ffcd00",
                        "&:hover": { backgroundColor: "white" },
                        fontWeight: "bold",
                      }}
                    >
                      READ MORE
                    </Button>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};

export default NewsSlider;
