import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import DarkButton from "../utils/DarkButton";
import Button from "../utils/Button";
import { useState, useEffect } from "react";
import bg2 from "../../assets/bg2.jpg";
import bg3 from "../../assets/bg3.jpg";
import { IconButton } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const HeroSection = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const imgdata = [bg2, bg3, bg2, bg3];

  const heroData = [
    {
      title: "Skydive",
      subtitle: "Space Foundation",
      description1:
        "Make good things happen, There are a lot of ways to make good things happen",
      description2: "Raise money for charity and personal cause",
      button1: "Our Cause",
      button2: "Talk to us",
    },
    {
      title: "Give Hope",
      subtitle: "Join the movement",
      description1:
        "Make good things happen, There are a lot of ways to make good things happen",
      button1: "Start Fundraising",
      button2: "Our Causes",
    },
    {
      title: "Be a Volunteer",
      subtitle: "Be a part of the change",
      description1:
        "Make someones future brighter, There are a lot of ways to make good things happen",
      button1: "Help Now",
      button2: "Our Causes",
    },
    {
      title: "Give Hope",
      subtitle: "Join the movement",
      description1:
        "Make good things happen, There are a lot of ways to make good things happen",
      button1: "Start Fundraising",
      button2: "Our Causes",
    },
  ];
  const handleClick = (n) => {
    console.log("click");
    setCurrentSection(n);
  };
  let data = heroData[currentSection];
  useEffect(() => {
    let debouncer;
    let debounceHandler = () => {
      if (currentSection === imgdata.length - 1) {
        setCurrentSection(0);
      } else {
        setCurrentSection(currentSection + 1);
      }
    };
    const debounce = () => {
      clearTimeout(debouncer);
      debouncer = setTimeout(debounceHandler, 10000);
    };
    debounce();
    return () => {
      clearTimeout(debouncer);
    };
  }, [currentSection]);
  return (
    <Box
      sx={{
        backgroundImage: `url(${imgdata[currentSection]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        hight: "200vh",
      }}
    >
      <Stack
        justifyContent="flex-end"
        alignItems="center"
        sx={{ height: "170vh" }}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100vh", pb: 5 }}
          key={data.title}
        >
          <Typography
            variant="h6"
            color={"secondary"}
            fontFamily={"UbuntuMedium"}
            pb={3}
            className="fade-in-animation"
          >
            {data.title}
          </Typography>
          <Typography
            variant="h1"
            fontFamily={"UbuntuMedium"}
            sx={{ color: "white" }}
            className="fade-in-animation"
          >
            {data.subtitle}
          </Typography>
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ height: 200 }}
          >
            <Typography
              variant="h6"
              className="fade-in-animation"
              pt={4}
              sx={{ color: "white" }}
            >
              {data.description1}
            </Typography>
            <Typography
              variant="h6"
              className="fade-in-animation"
              pb={4}
              sx={{ color: "white" }}
            >
              {data.description2}
            </Typography>
          </Stack>
          <Stack
            pt={2}
            className="fade-in-animation"
            flexDirection={"row"}
            gap={4}
          >
            <DarkButton
              sx={{
                width: 250,
                height: 75,
                outlineColor: "#ffcd00",
                fontSize: 20,
              }}
            >
              {data.button1}
            </DarkButton>
            <Button
              sx={{
                width: 250,
                height: 75,
                outlineColor: "#ffcd00",
                fontSize: 20,
              }}
            >
              {data.button2}
            </Button>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent={"center"}
          alignItems={"center"}
          spacing={2}
          sx={{ width: "100%", pb: 5 }}
        >
          <IconButton onClick={() => handleClick(0)}>
            <CircleIcon
              sx={{
                cursor: "pointer",
                fontSize: 20,
                outline: "0px solid white",
                borderRadius: "50%",
                color: currentSection === 0 ? "#ffcd00" : "#fff",
                outlineWidth: currentSection === 0 ? "2px" : "0px",
                opacity: currentSection === 0 ? 1 : 0.5,
              }}
            />
          </IconButton>
          <IconButton onClick={() => handleClick(1)}>
            <CircleIcon
              sx={{
                cursor: "pointer",
                fontSize: 20,
                outline: "0px solid white",
                borderRadius: "50%",
                color: currentSection === 1 ? "#ffcd00" : "#fff",
                outlineWidth: currentSection === 1 ? "2px" : "0px",
                opacity: currentSection === 1 ? 1 : 0.5,
              }}
            />
          </IconButton>
          <IconButton onClick={() => handleClick(2)}>
            <CircleIcon
              sx={{
                cursor: "pointer",
                fontSize: 20,
                outline: "0px solid white",
                borderRadius: "50%",
                color: currentSection === 2 ? "#ffcd00" : "#fff",
                outlineWidth: currentSection === 2 ? "2px" : "0px",
                opacity: currentSection === 2 ? 1 : 0.5,
              }}
            />
          </IconButton>
          <IconButton onClick={() => handleClick(3)}>
            <CircleIcon
              sx={{
                cursor: "pointer",
                fontSize: 20,
                outline: "0px solid white",
                borderRadius: "50%",
                color: currentSection === 3 ? "#ffcd00" : "#fff",
                outlineWidth: currentSection === 3 ? "2px" : "0px",
                opacity: currentSection === 3 ? 1 : 0.5,
              }}
            />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HeroSection;
