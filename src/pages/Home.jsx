import React from "react";
import Navbar from "../components/Navbar";
import { Box, Stack, Button, Typography } from "@mui/material";
import bg1 from "../assets/bg1.png";
import CircleIcon from "@mui/icons-material/Circle";
import { useState } from "react";
import bgIntro from "../assets/bgIntro.png";

const Home = () => {
  const [currentSection, setCurrentSection] = useState(1);

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    console.log(scrollPercentage);
    if (scrollPercentage > 50 && currentSection === 1) {
      setCurrentSection(2);
    }
  };
  return (
    <>
      {/* MAIN SECTION */}
      <div onScroll={handleScroll}>
        <Box
          sx={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            hight: "200vh",
          }}
        >
          <div onScroll={handleScroll}>
            <Stack
              justifyContent="flex-end"
              alignItems="center"
              sx={{ height: "100vh" }}
            >
              <Stack direction="row" spacing={2} sx={{ width: "10vh", pb: 5 }}>
                <CircleIcon
                  fontSize="10px"
                  sx={{ cursor: "pointer", color: "white" }}
                />
                <CircleIcon
                  fontSize="10px"
                  sx={{ cursor: "pointer", color: "white" }}
                />
                <CircleIcon
                  fontSize="10px"
                  sx={{ cursor: "pointer", color: "white" }}
                />
                <CircleIcon
                  fontSize="10px"
                  sx={{ cursor: "pointer", color: "white" }}
                />
                <CircleIcon
                  fontSize="10px"
                  sx={{
                    cursor: "pointer",
                    color: "green",
                    outline: "1px solid white",
                    borderRadius: "50%",
                  }}
                />
              </Stack>
            </Stack>
          </div>
        </Box>
        {/* INTRO SECTION */}
        <Stack
          sx={{
            height: "300vh",
            backgroundImage: `url(${bgIntro})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Intro section 1 */}
          <Stack
            justifyContent="center"
            alignItems="center"
            sx={{ height: "100vh" }}
          >
            <Box>
              <Typography variant="h1" sx={{ color: "white" }}>
                SPACE
              </Typography>
              <Typography variant="h2" sx={{ color: "white" }}>
                FOUNDATION
              </Typography>
            </Box>
          </Stack>
          {/* Intro seciton 2 */}
          <Stack
            justifyContent="flex-start"
            alignItems="center"
            sx={{ height: "100vh" }}
          >
            <Box>
              <Typography variant="h2" sx={{ color: "white" }}>
                REVOLUTIONALIZING
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </div>
    </>
  );
};

export default Home;
